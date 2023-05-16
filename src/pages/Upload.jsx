import React from "react";
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
const Upload = () => {
  return (
    <Container>
      <TitleBox>
        <TitleBoxTitle> 강의파일 업로드 </TitleBoxTitle>
      </TitleBox>
      <ContentContainer></ContentContainer>
    </Container>
  );
};

export default Upload;
