import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ContentBox = styled.div`
  margin-top: 10vh;
  width: 80%;
  /* border: 2px dashed black; */
`;
const TitleBox = styled.div`
  margin-top: 50px;
  width: 60%;
  padding-bottom: 10px;
  border-bottom: 2px solid grey;
`;
const TitleBoxTitle = styled.div`
  font-size: 24px;
  text-align: center;
`;
const ContentBoxTitle = styled.h2`
  padding-left: 40px;
  padding-bottom: 5px;
  color: dimgrey;
  border-bottom: 1px solid dimgrey;
`;
const ContentBoxContent = styled.h3`
  margin-left: 20px;
  color: grey;
  margin-bottom: 10vh;
`;

const Result = () => {
  const location = useLocation();
  const txtData = location.state;

  return (
    <Container>
      <TitleBox>
        <TitleBoxTitle>결과 페이지</TitleBoxTitle>
      </TitleBox>
      <ContentBox>
        <ContentBoxTitle>요약1</ContentBoxTitle>
        <ContentBoxContent>{txtData.summarization}</ContentBoxContent>
        <ContentBoxTitle>요약2</ContentBoxTitle>
        <ContentBoxContent>{txtData.our_summarization}</ContentBoxContent>
        <ContentBoxTitle>원문</ContentBoxTitle>
        <ContentBoxContent>{txtData.transcription}</ContentBoxContent>
      </ContentBox>
    </Container>
  );
};

export default Result;
