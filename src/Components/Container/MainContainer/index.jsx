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
  MainDiv,
  FilterButtons,
} from "./styles";
import CardMain from "../CardMain";
import BannerPic from "../../../img/1.jpg";
import Card1 from "../../../img/card1.jpg";
import Card2 from "../../../img/card2.jpg";
import Card3 from "../../../img/card3.jpg";
import Card4 from "../../../img/card4.jpg";
import Card5 from "../../../img/card5.jpg";
import Card6 from "../../../img/card6.jpg";
import MainRightTop from "../MainRightTop.jsx";
import MainRightBottom from "../MainRightBottom";

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
            <FilterButtons>
              <Button1>All</Button1>
              <Button2>Illustration</Button2>
              <Button2>Art</Button2>
              <Button2>Games</Button2>
            </FilterButtons>
          </Filters>
          <MainDiv>
            <main>
              <CardMain imgSrc={Card1} title={"CubicThunder"} hearts={"65"} />
              <CardMain imgSrc={Card2} title={"Pokemon Ball"} hearts={"45"} />
              <CardMain imgSrc={Card3} title={"Pyramid God"} hearts={"55"} />
              <CardMain imgSrc={Card4} title={"Stunning Cube"} hearts={"75"} />
              <CardMain imgSrc={Card5} title={"Star Crystal"} hearts={"35"} />
              <CardMain imgSrc={Card6} title={"Crystal Bird"} hearts={"85"} />
              <CardMain imgSrc={Card1} title={"CubicThunder"} hearts={"65"} />
              <CardMain imgSrc={Card2} title={"Pokemon Ball"} hearts={"45"} />
            </main>
          </MainDiv>
        </Cards>
      </LeftContainer>
      <RightContainer>
        <MainRightTop></MainRightTop>
        <MainRightBottom></MainRightBottom>
      </RightContainer>
    </Wrapper>
  );
};

export default MainContainer;
