import React, { useCallback, useState } from "react";
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
  const [mouseOn, setMouseOn] = useState(false);
  const onMouseEnter = useCallback(() => {
    setMouseOn((prev) => !prev);
  }, [mouseOn, setMouseOn]);
  const onMouseLeave = useCallback(() => {
    setMouseOn(false);
  }, [mouseOn, setMouseOn]);
  const onClick = () => {
    setMouseOn((prev) => !prev);
    console.log(mouseOn);
  };

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
        <ChevronIcon
          onClick={onClick}
          // onMouseEnter={onMouseEnter}
          // onMouseLeave={onMouseLeave}
          mouseHere={mouseOn}
        >
          <FaChevronDown />
        </ChevronIcon>
        <MenuContainer mouseHere={mouseOn} id="menuContainer">
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
