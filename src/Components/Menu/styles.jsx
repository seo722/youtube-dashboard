import styled from "styled-components";

export const LeftMenu = styled.menu`
  width: 100px;
  height: 100%;
  background-color: #19162c;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  position: sticky;
  top: 0;

  img {
    width: 3em;
    padding-top: 30px;
    cursor: pointer;
  }

  ul {
    padding-top: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
      list-style: none;
      margin: 20px 0;
      position: relative;
      color: #8c8a95;
      width: 100%;
      text-align: center;

      a {
        font-size: 24px;
        color: #8c8a95;
        text-decoration: none;
        transition: all 0.3s;

        &:before {
          position: absolute;
          content: "";
          top: 5px;
          left: -10px;
          width: 0px;
          height: 20px;
          background: #b1147d;
          border-radius: 50%;
        }
      }

      &:hover a {
        color: #b1147d;
      }

      &:hover a::before {
        width: 20px;
        transition: all 0.3s;
      }
    }
  }

  @media only screen and (max-width: 525px) {
    min-width: 68px;
    width: 68px;
  }
`;

export const MainMenu = styled.ul``;

export const LastMenu = styled.ul`
  margin-top: auto;
`;
