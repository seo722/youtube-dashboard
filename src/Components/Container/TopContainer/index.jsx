import React from "react";
import {
  InputBox,
  Wrapper,
  ProfileContainer,
  ProfileImg,
  ProfileName,
  MenuContainer,
  ChevronIcon,
} from "./styles";
import { BiSearchAlt } from "react-icons/bi";
import { FaBell, FaChevronDown } from "react-icons/fa";
import eve from "../../../img/eve.jpg";

const TopContainer = () => {
  return (
    <Wrapper>
      <InputBox>
        <input type="text" placeholder="Search item, collections" />
        <i>
          <BiSearchAlt />
        </i>
      </InputBox>
      <ProfileContainer>
        <i>
          <FaBell />
        </i>
        <ProfileImg>
          <img src={eve} alt="" />
        </ProfileImg>
        <ProfileName>Seo Park</ProfileName>
        <ChevronIcon id="menuChevron">
          <FaChevronDown />
        </ChevronIcon>
        <MenuContainer id="menuContainer">
          <ul>
            <li>Web Design</li>
            <li>UI / UX</li>
            <li>Form Design</li>
            <li>UI Design</li>
          </ul>
        </MenuContainer>
      </ProfileContainer>
    </Wrapper>
  );
};

export default TopContainer;
