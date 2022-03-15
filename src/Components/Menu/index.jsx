import React, { useCallback, useEffect, useState } from "react";
import Logo from "../../img/logo.png";
import { LeftMenu, MainMenu, LastMenu } from "./styles";
import {
  FaDelicious,
  FaShoppingCart,
  FaWallet,
  FaChartLine,
  FaRegClock,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import "./styles.css";

const Menu = () => {
  return (
    <LeftMenu>
      <img src={Logo} alt="" />

      <MainMenu id="mainMenu">
        <Icon icon={<FaDelicious />} />
        <Icon icon={<FaShoppingCart />} />
        <Icon icon={<FaWallet />} />
        <Icon icon={<FaChartLine />} />
        <Icon icon={<FaRegClock />} />
      </MainMenu>
      <LastMenu>
        <Icon icon={<FaCog />} />
        <Icon icon={<FaSignOutAlt />} />
      </LastMenu>
    </LeftMenu>
  );
};

const Icon = ({ icon, className }) => {
  const [otherClassActive, setOtherClassActive] = useState(false);
  const [classActive, setClassActive] = useState(false);
  const onClick = () => {
    if (!otherClassActive) {
      setClassActive((prev) => !prev);
    } else {
      setOtherClassActive((prev) => !prev);
    }
  };
  //이거 어케 하냐 ...?
  return (
    <li
      onClick={onClick}
      className={classActive && !otherClassActive ? "active" : ""}
    >
      <a href="#">{icon}</a>
    </li>
  );
};

export default Menu;
