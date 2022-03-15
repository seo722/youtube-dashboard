import React from "react";
import TopContainer from "./TopContainer";
import { Wrapper } from "./styles";
import MainContainer from "./MainContainer";

const Container = () => {
  return (
    <Wrapper>
      <TopContainer />
      <MainContainer />
    </Wrapper>
  );
};

export default Container;
