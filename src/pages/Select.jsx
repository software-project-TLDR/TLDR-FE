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

const Select = () => {
  return (
    <Container>
      <TitleBox>
        <TitleBoxTitle> 파일 업로드 방식을 선택해주세요. </TitleBoxTitle>
      </TitleBox>
    </Container>
  );
};

export default Select;
