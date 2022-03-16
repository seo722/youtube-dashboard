import React from "react";
import { Card, CardButton, CardIcon, CardName, Stats } from "./styles";
import { BsFillHeartFill } from "react-icons/bs";
import { Button1, Button2 } from "../MainContainer/styles";

const CardMain = ({ imgSrc, title, hearts }) => {
  return (
    <Card>
      <img src={imgSrc} alt="" />

      <CardName>
        <h2>{title}</h2>
        <CardIcon>
          <i>
            <BsFillHeartFill /> <span>{hearts}</span>
          </i>
        </CardIcon>
      </CardName>
      <Stats>
        <p>
          Current BID <span>1.2ETH</span>
        </p>
        <p>
          Ending In <span>1d:12h:10m</span>
        </p>
      </Stats>

      <CardButton>
        <Button1 small>Place a Bid</Button1>
        <Button2 small>History</Button2>
      </CardButton>
    </Card>
  );
};

export default CardMain;
