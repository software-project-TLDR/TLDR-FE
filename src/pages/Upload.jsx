import React, { useState } from "react";
import styled from "styled-components";

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
const FileInput = styled.input`
  display: none;
`;

const Upload = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setUploadedFile(file);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setUploadedFile(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const validateFileType = (file) => {
    if (file.type.startsWith("audio/")) {
      setUploadedFile(file);
      setErrorMessage("");
    } else {
      setUploadedFile(null);
      setErrorMessage("음성 파일이 아닙니다.");
    }
  };

  return (
    <Container>
      <TitleBox>
        <TitleBoxTitle> 강의파일 업로드 </TitleBoxTitle>
      </TitleBox>
      <ContentContainer>
        <UploadContainer>
          <UploadArea
            uploaded={uploadedFile}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            {uploadedFile ? (
              <p>업로드된 파일: {uploadedFile.name}</p>
            ) : (
              <p>음성 파일을 드래그 앤 드롭하세요.</p>
            )}
            {errorMessage && <p>{errorMessage}</p>}
          </UploadArea>
          <FileInput type="file" accept="audio/*" onChange={handleFileUpload} />
          {/* <label className="input-file-button" for="input-file">
            업로드
          </label>
          <input type="file" id="input-file" style={{ display: "none" }} /> */}
        </UploadContainer>
      </ContentContainer>
    </Container>
  );
};

export default Upload;
