import styled from "styled-components";

export const BottomCard = styled.div`
  margin-top: 15px;
  background: #19162c;
  border-radius: 0.5em;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  padding: 10px 20px;
`;

export const BottomCardName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    color: #d1d0d5;
  }

  a {
    color: #b1147d;
  }
`;

export const TopSeller = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;

  p {
    font-size: 14px;
    color: #adabb8;
    font-weight: bold;
    margin-left: 10px;

    span {
      display: block;
      font-size: 12px;
    }
  }
`;

export const TopSellerImg = styled.div`
  width: 45px;
  height: 45px;
  background: #252041;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media only screen and (min-width: 525px) and (max-width: 950px) {
    width: 30px;
    height: 30px;
  }
`;
