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
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* text-align: center; */
  /* background-color: red; */
`;
const ContentBox = styled.div`
  width: 70vh;
  height: 70vh;
  background-color: yellow;
`;

const Select = () => {
  return (
    <Container>
      <TitleBox>
        <TitleBoxTitle> 파일 업로드 방식을 선택해주세요. </TitleBoxTitle>
      </TitleBox>
      <ContentContainer>
        <ContentBox></ContentBox>
        or
        <ContentBox></ContentBox>
      </ContentContainer>
    </Container>
  );
};

export default Select;
