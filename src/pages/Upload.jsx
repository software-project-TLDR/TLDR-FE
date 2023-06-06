import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
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

const ContentContainer = styled.form`
  font-size: 2rem;
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const UploadedFileList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 350px;
  border: solid 1px black;
  margin: 50px 0 0 50px;
  font-size: 15px;
`;

const UploadArea = styled.div`
  width: 300px;
  height: 200px;
  border: 2px dashed #aaa;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #aaa;
  cursor: pointer;

  ${(props) =>
    props.uploaded &&
    `
    border-color: #4caf50;
    color: #4caf50;
  `}
`;

const UploadButton = ({ onFileUpload }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.name.endsWith(".wav") || file.name.endsWith(".mp3")) {
      onFileUpload(file);
    }
  };

  const handleButtonClick = (event) => {
    event.preventDefault(); // 페이지 새로고침 방지
    document.getElementById("file-input").click();
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.name.endsWith(".wav") || file.name.endsWith(".mp3")) {
      onFileUpload(file);
    }
  };

  return (
    <>
      <input
        id="file-input"
        type="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
        accept=".wav, .mp3"
      />
      <UploadArea
        uploaded={false}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        파일을 드래그앤드롭하세요
      </UploadArea>
      <button onClick={handleButtonClick}>.mp3 또는 .wav 파일 업로드</button>
    </>
  );
};

const Footer = styled.footer`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const NextButtonStyle = styled.button`
  margin-right: 30px;
`;
const NextButton = ({ children }) => {
  const navigate = useNavigate();

  return (
    <NextButtonStyle
      onClick={() => {
        navigate("/Result");
      }}
    >
      다음
    </NextButtonStyle>
  );
};

const Upload = () => {
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileUpload = (file) => {
    setUploadedFile(file);
  };

  const handleNextButtonClick = () => {
    if (uploadedFile) {
      const formData = new FormData();
      formData.append("audio", uploadedFile);

      fetch("http://127.0.0.1:8000/useWhisper/uploaded/", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <Container>
      <TitleBox>
        <TitleBoxTitle>강의파일 업로드</TitleBoxTitle>
      </TitleBox>
      <ContentContainer>
        <UploadContainer>
          <UploadButton onFileUpload={handleFileUpload} />
        </UploadContainer>
        <UploadedFileList>{uploadedFile && uploadedFile.name}</UploadedFileList>
      </ContentContainer>
      <Footer>
        <NextButton onClick={handleNextButtonClick}></NextButton>
      </Footer>
    </Container>
  );
};

export default Upload;
