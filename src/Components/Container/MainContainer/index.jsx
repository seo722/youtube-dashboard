import React from "react";
import {
  Banner,
  BIDContainer,
  LeftContainer,
  Cards,
  RightContainer,
  TextContainer,
  Wrapper,
  Button1,
  Popular,
  Button2,
  Filters,
} from "./styles";
import BannerPic from "../../../img/1.jpg";

const MainContainer = () => {
  return (
    <Wrapper>
      <LeftContainer>
        <Banner pic={BannerPic}>
          <TextContainer>
            <h1>Round Hall</h1>
            <h2>1.5 ETH</h2>
            <p>Uploaded by Seo Park</p>
            <BIDContainer>
              <Button1 href="">BID NOW</Button1>
              <p>
                Ending In <span>2d:15h:20m</span>
              </p>
            </BIDContainer>
          </TextContainer>
        </Banner>
        <Cards>
          <Filters>
            <Popular>
              <h2>Feed</h2>
              <Button2>Popular</Button2>
            </Popular>
            <div>
              <Button1>All</Button1>
              <Button2>Illustration</Button2>
              <Button2>Art</Button2>
              <Button2>Games</Button2>
            </div>
          </Filters>
          <main></main>
        </Cards>
      </LeftContainer>
      <RightContainer></RightContainer>
    </Wrapper>
  );
};

export default MainContainer;
