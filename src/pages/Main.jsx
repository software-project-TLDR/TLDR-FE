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
const handleOnclickStartButton = () => {
  console.log("클릭");
};

const StartButton = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};
const Main = () => {
  return (
    <>
      <Container>
        <Titlebox>
          <TitleboxTitle>Tl;Dr</TitleboxTitle>
          <TitleboxDesc>인공지능 강의요약 프로젝트</TitleboxDesc>
        </Titlebox>
        <StartButton onClick={handleOnclickStartButton}>시작하기</StartButton>
      </Container>
    </>
  );
};

export default Main;
