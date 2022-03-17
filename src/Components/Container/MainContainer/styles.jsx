import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - 45px);
  display: flex;
  padding-top: 15px;

  main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 525px) {
    flex-direction: column;
    height: auto;
  }

  @media screen and (min-width: 525px) and (max-width: 950px) {
    height: calc(100%-25px);
  }
`;

export const MainDiv = styled.div`
  // display: flex;
  // justify-content: center;
  // align-items: center;

  //   main {
  //     width: 100%;
  //     display: grid;
  //     grid-template-columns: repeat(3, 1fr);
  //     margin: 50px;
`;

export const LeftContainer = styled.div`
  width: calc(100% - 30%);
  overflow-y: scroll;
  transition: all 0.3s cubic-bezier(0.17, 0.81, 0.38, 1.39);

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 525px) {
    width: 100%;
  }
  @media screen and (min-width: 525px) and (max-width: 950px) {
    width: calc(100% - 30%);
  }
`;

export const Banner = styled.div`
  height: 260px;
  background: url(${(props) => props.pic});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 0.5em;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  position: relative;
`;

export const TextContainer = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;

  h1 {
    font-size: 3.5em;
    color: #f1f1f1;
    font-weight: 700;
    margin: 5px 0px;
  }

  h2 {
    font-size: 2.5em;
    color: #b1147d;
    margin: 5px 0;
  }

  p {
    color: #f1f1f1;
    font-size: 18px;
    margin: 5px 0;
  }

  @media screen and (max-width: 525px) {
    h1 {
      font-size: 2.5em;
    }
    h2 {
      font-size: 1.5em;
    }
  }
`;

export const BIDContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;

  p {
    margin-left: 10px;
    span {
      display: block;
      color: #b1174d;
      font-weight: 600;
    }
  }
`;

export const Button1 = styled.a`
  text-decoration: none;
  font-size: ${(props) => (props.small ? "10px" : "14px")};
  // font-size: 14px;
  color: #fff;
  font-weight: 600;
  background: linear-gradient(#ff21bc, #b21783);
  padding: 5px 15px;
  border-radius: 0.5em;
  text-transform: uppercase;
  box-shadow: inset 2px 2px 2px rgba(255, 255, 255, 0.4),
    inset -5px -10px 10px #b1147d;
  margin-right: 10px;
  margin-left: ${(props) => (props.marginLeft ? "auto" : null)};
  cursor: pointer;
`;

export const Cards = styled.div`
  background-color: #19162c;
  padding: 10px;
  margin-top: 20px;
  border-radius: 0.5em;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
`;

export const Filters = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 30px;

  @media screen and (min-width: 525px) and (max-width: 950px) {
    padding: 0;
  }
`;

export const FilterButtons = styled.div`
  @media screen and (max-width: 525px) {
    display: none;
  }
`;

export const Popular = styled.div`
  display: flex;
  align-items: center;
  h2 {
    font-size: 20px;
    font-weight: bold;
    color: #d1cfd4;
    margin-right: 10px;
  }
`;

export const Button2 = styled.a`
  font-size: ${(props) => (props.small ? "10px" : "14px")};
  text-decoration: none;
  font-weight: bold;
  color: #d1d0d5;
  border: 2px solid #443b78;
  border-radius: 0.5em;
  padding: 5px 15px;
  margin: 0px 5px;
  cursor: pointer;
`;

//Right container
export const RightContainer = styled.div`
  width: calc(100% - 70%);
  padding: 0px 10px;
  padding-left: 20px;
  transition: all 0.3s cubic-bezier(0.17, 0.71, 0.38, 1.39);

  @media screen and (max-width: 525px) {
    width: 100%;
    padding: unset;
    margin-top: 20px;
  }

  @media screen and (min-width: 525px) and (max-width: 950px) {
    width: calc(100% - 60%);
  }
`;
