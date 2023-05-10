import React from "react";
import styled from "styled-components";
import { FaMicrophoneAlt, FaFileUpload } from "react-icons/fa";
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

const ContentContainer = styled.div`
  font-size: 2rem;
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* text-align: center; */
  /* background-color: red; */
`;
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70vh;
  height: 70vh;
  /* background-color: yellow; */
`;
const RecordButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15rem;
  height: 15rem;
  border-radius: 7.5rem;
  background-color: transparent;
  border: 0.51rem solid black;
  opacity: 0.8;
`;
const UploadButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 10rem;
  height: 4rem;
  border-radius: 2rem;
`;

const Select = () => {
  return (
    <Container>
      <TitleBox>
        <TitleBoxTitle> 음성파일 첨부방식을 선택해주세요. </TitleBoxTitle>
      </TitleBox>
      <ContentContainer>
        <ContentBox>
          <RecordButton>
            <FaMicrophoneAlt size={150} />
          </RecordButton>
          <h3>녹음하기</h3>
        </ContentBox>
        or
        <ContentBox>
          <UploadButton>
            <FaFileUpload size={40} />
            &nbsp;
            <h4>파일 첨부하기</h4>
          </UploadButton>
        </ContentBox>
      </ContentContainer>
    </Container>
  );
};

export default Select;
