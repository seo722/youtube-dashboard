import React from "react";
import { TopCard, TopCardName, Earning } from "./styles";

const MainRightTop = () => {
  return (
    <TopCard>
      <TopCardName>
        <h2>Statistics</h2>
        <a href="">View More</a>
      </TopCardName>
      <Earning>
        <p>
          Artwork Sold <span>187</span>
        </p>
        <p>
          Artwork Canceled <span>5</span>
        </p>
        <p>
          Artwork Pending <span>25</span>
        </p>
        <p>
          Artwork Delivered <span>200</span>
        </p>
        <p>
          Total Earnings <span>262 ETH</span>
        </p>
      </Earning>
    </TopCard>
  );
};

export default MainRightTop;
