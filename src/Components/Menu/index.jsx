import React from "react";
import Logo from "../../img/logo.png";
import { LeftMenu } from "./styles";

function Menu() {
  return (
    <LeftMenu>
      <img src={Logo} alt="" />
    </LeftMenu>
  );
}

export default Menu;
