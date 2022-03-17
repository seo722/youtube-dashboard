import React from "react";
import { BottomCard, BottomCardName, TopSeller, TopSellerImg } from "./styles";
import { Button1, Button2 } from "../MainContainer/styles";
import TopSellerPeople from "./TopSeller";

const MainRightBottom = () => {
  return (
    <BottomCard>
      <BottomCardName>
        <h2>Top Seller</h2>
        <a href="#">View More</a>
      </BottomCardName>

      {TopSellerPeople.map((seller) => (
        <TopSeller key={seller.id}>
          <TopSellerImg>
            <img src={seller.imgSrc} alt={seller.seller_name} />
          </TopSellerImg>
          <p>
            {seller.seller_name} <span>{seller.username}</span>
          </p>
          <Button1 small marginLeft>
            Follow
          </Button1>
        </TopSeller>
      ))}
    </BottomCard>
  );
};

export default MainRightBottom;
