import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { ReactMic } from "react-mic";

const Container = styled.div``;
const TitleBox = styled.div``;
const TitleBoxTitle = styled.div``;
const ContentContainer = styled.div``;

const RecordButton = styled.button``;
const PlayButton = styled.button``;
const DownloadButton = styled.button``;
const UploadButton = styled.button``;

function Record() {
  const [isRecording, setIsRecording] = useState(false);
  const [recordText, setRecordText] = useState("녹음 시작하기");
  const [recordedBlob, setRecordedBlob] = useState(null);

  const handleRecord = useCallback(() => {
    if (!isRecording) {
      setIsRecording(true);
      setRecordText("녹음 중단하기");
    } else {
      setIsRecording(false);
      setRecordText("녹음 시작하기");
      setRecordedBlob(null); // 녹음 중단 시 recordedBlob 초기화
    }
  }, [isRecording]);

  const onStop = useCallback((recordedBlob) => {
    setRecordedBlob(recordedBlob);
  }, []);

  const handlePlay = useCallback(() => {
    const url = URL.createObjectURL(recordedBlob.blob);
    const audio = new Audio(url);
    audio.play();
  }, [recordedBlob]);

  const handleDownload = useCallback(() => {
    if (recordedBlob && recordedBlob.blob) {
      const { blob } = recordedBlob;
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "녹음파일.wav";
      link.click();
      URL.revokeObjectURL(url);
    }
  }, [recordedBlob]);

  const isAudioAvailable = recordedBlob && recordedBlob.blob;
  // const isRecordingInProgress = isRecording && !isAudioAvailable;

  return (
    <Container>
      <TitleBox>
        <TitleBoxTitle>음성 녹음</TitleBoxTitle>
      </TitleBox>
      <ContentContainer>
        <ReactMic
          record={isRecording}
          onStop={onStop}
          visualSetting="sinewave"
          className="visualizer"
        />
        <RecordButton onClick={handleRecord}>{recordText}</RecordButton>
        <PlayButton onClick={handlePlay} disabled={!isAudioAvailable}>
          재생
        </PlayButton>
        <DownloadButton onClick={handleDownload} disabled={!isAudioAvailable}>
          다운로드
        </DownloadButton>
      </ContentContainer>
    </Container>
  );
}

export default Record;

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//   width: 100%;
// `;
// const TitleBox = styled.div`
//   margin-top: 50px;
//   width: 60%;
//   border-bottom: 2px solid grey;
//   padding-bottom: 10px;
// `;
// const TitleBoxTitle = styled.div`
//   font-size: 24px;
//   text-align: center;
// `;
// const ContentContainer = styled.div`
//   font-size: 2rem;
//   width: 100%;
//   height: 70vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
