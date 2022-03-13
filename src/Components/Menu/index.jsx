import React, { useCallback, useEffect } from "react";
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
  useEffect(() => {
    const mainMenuLi = document
      .getElementById("mainMenu")
      .querySelectorAll("li");
    const logo = document.querySelector("img");

    function changeActive() {
      mainMenuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    function logoClick() {
      mainMenuLi.forEach((n) => n.classList.remove("active"));
    }

    logo.addEventListener("click", logoClick);
    mainMenuLi?.forEach((n) => n.addEventListener("click", changeActive));
  }, []);

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

const Icon = ({ icon }) => (
  <li>
    <a href="#">{icon}</a>
  </li>
);

export default Menu;
