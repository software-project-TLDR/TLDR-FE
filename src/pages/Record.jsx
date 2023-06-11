import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { ReactMic } from "react-mic";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`;
const TitleBox = styled.div`
  margin-top: 50px;
  width: 60%;
  border-bottom: 2px solid grey;
  padding-bottom: 10px;
`;
const TitleBoxTitle = styled.div`
  font-size: 24px;
  text-align: center;
`;
const ContentContainer = styled.div`
  font-size: 2rem;
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const RecordInfoBox = styled.div``;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;

const RecordButton = styled.button``;
const PlayButton = styled.button``;
const DownloadButton = styled.button``;

const Footer = styled.footer`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const UploadButton = styled.button`
  margin-right: 20%;
`;

function Record() {
  const navigate = useNavigate();
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

      const date = new Date();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const fileName = `${month}-${day}-${hours}-${minutes}.wav`;

      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      link.click();
      URL.revokeObjectURL(url);
    }
  }, [recordedBlob]);

  const handleUpload = useCallback(() => {
    const date = new Date();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const fileName = `${month}-${day}-${hours}-${minutes}.wav`;

    if (recordedBlob && recordedBlob.blob) {
      const audioFile = new File([recordedBlob.blob], fileName, {
        type: "audio/wav",
      });

      const formData = new FormData();
      formData.append("audio", audioFile, fileName);

      fetch("http://127.0.0.1:8000/useWhisper/uploaded/", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          return response.json();
        })
        .catch((error) => {
          console.error(error);
        })
        .then((data) => {
          console.log("내용:", data);
          navigate("/result", { state: data });
        });
    }
  }, [recordedBlob, navigate]);

  const isAudioAvailable = recordedBlob && recordedBlob.blob;

  return (
    <Container>
      <TitleBox>
        <TitleBoxTitle>음성 녹음</TitleBoxTitle>
      </TitleBox>
      <ContentContainer>
        <RecordInfoBox>
          <ReactMic
            record={isRecording}
            onStop={onStop}
            visualSetting="sinewave"
            className="visualizer"
          />
          <ButtonBox>
            <RecordButton onClick={handleRecord}>{recordText}</RecordButton>
            <PlayButton onClick={handlePlay} disabled={!isAudioAvailable}>
              재생
            </PlayButton>
            <DownloadButton
              onClick={handleDownload}
              disabled={!isAudioAvailable}
            >
              다운로드
            </DownloadButton>
          </ButtonBox>
        </RecordInfoBox>
        <Footer>
          <UploadButton onClick={handleUpload} disabled={!isAudioAvailable}>
            다음
          </UploadButton>
        </Footer>
      </ContentContainer>
    </Container>
  );
}

export default Record;
