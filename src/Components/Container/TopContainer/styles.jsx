import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InputBox = styled.div`
  width: 350px;
  max-width: 350px;
  height: 45px;
  position: relative;

  input {
    width: 100%;
    height: 100%;
    background: #19162c;
    border: none;
    outline: none;
    border-radius: 0.5em;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
    color: #d0cfd4;
    font-size: 16px;
    padding: 0px 40px;

    &::placeholder {
      color: #757380;
    }
  }

  i {
    position: absolute;
    top: 0;
    left: 0;
    color: #757380;
    font-size: 20px;
    width: 40px;
    height: 45px;
    text-align: center;
    line-height: 45px;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #d0cfd4;
  position: relative;

  i:first-child {
    width: 40px;
    height: 40px;
    background: #19162c;
    border-radius: 0.5em;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
    text-align: center;
    line-height: 40px;
    font-size: 18px;
    position: relative;
  }
  i:first-child:before {
    position: absolute;
    content: "";
    top: 5px;
    right: 10px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #b1147d;
  }
`;

export const ChevronIcon = styled.i`
  cursor: pointer;
  font-size: 12px;
  margin: 0px 20px;
`;

export const ProfileImg = styled.div`
  width: 40px;
  height: 40px;
  margin: 0px 10px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const ProfileName = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 14px;
`;

export const MenuContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 50px;
  background: #19162c;
  border-radius: 0.5em;
  width: 180px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  z-index: 1;
  transform: translateX(300px);

  &:after {
    position: absolute;
    content: "";
    width: 12px;
    height: 12px;
    background: #19162c;
    top: -6px;
    right: 15px;
    transform: rotate(45deg);
  }

  ul {
    width: 100%;
    height: 100%;

    li {
      list-style: none;
      margin: 5px 0;
      width: 100%;
      padding: 10px 20px;
      cursor: pointer;
      color: #757380;
      text-align: left;

      &:hover {
        background: #121026;
        color: #f1f1f1;
        transition: 0.3s;
      }
    }
  }
`;
