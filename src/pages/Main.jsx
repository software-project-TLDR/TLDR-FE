import React, { Children } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* height: 300vh; */
`;
const Titlebox = styled.div`
  border: 1px solid black;
  width: 300px;
  margin-top: 15vh;
  padding: 20px 0 20px 0;
`;
const TitleboxTitle = styled.div`
  color: grey;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
`;
const TitleboxDesc = styled.div`
  font-size: 18px;
  text-align: center;
  margin-top: 10px;
`;
const StyledButton = styled.button`
  width: 100px;
  height: 50px;
  background-color: red;
  border: none;
  border-radius: 25px;
  margin-top: 10vh;
  margin-bottom: 30vh;
`;
const Aboutbox = styled.div`
  width: 80%;
  border: 1px solid black;
`;
const AboutboxTitle = styled.div`
  font: 30px black;
  font-weight: 900;
  padding: 10px 0 0 50px;
`;
const AboutboxContent = styled.div`
  font: 18px;
  padding-top: 15px;
  padding-left: 30px;
  padding-right: 30px;
`;
const handleOnclickStartButton = () => {
  console.log("클릭");
};
const StartButton = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};
const Main = () => {
  return (
    <Container>
      <Titlebox>
        <TitleboxTitle>Tl;Dr</TitleboxTitle>
        <TitleboxDesc>인공지능 강의요약 프로젝트</TitleboxDesc>
      </Titlebox>
      <StartButton onClick={handleOnclickStartButton}>시작하기</StartButton>
      <Aboutbox>
        <AboutboxTitle>About</AboutboxTitle>
        <AboutboxContent>
          본 페이지는 음성 녹음 파일에 텍스트 요약(Summarization), 키워드
          추출(Keyword Extraction) 기술을 적용하여 기존의
          STT(Speech-to-Text)기술을 보완한 지능형 텍스트 구성 및 제공을 위한
          프로젝트를 구현하기 위하여 제공되는 서비스입니다. <br />
          자연어처리를 위하여 KoBART와 GSG를 결합한 모델을 사용하여 프로토타입을
          제공하며, 가능하면 키워드별 요약에 따른 시각화 이미지 또한 제공할
          예정입니다.
        </AboutboxContent>
      </Aboutbox>
    </Container>
  );
};

export default Main;
