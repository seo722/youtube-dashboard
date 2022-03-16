import styled from "styled-components";

export const TopCard = styled.div`
  background: #19162c;
  border-radius: 0.5em;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  padding: 10px 20px;
`;

export const TopCardName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  //   padding: 10px 20px;

  h2 {
    color: #d1d0d5;
  }

  a {
    color: #b1147d;
  }
`;
export const Earning = styled.div`
  width: 100%;
  padding: 5px 10px;

  p {
    margin: 8px 0;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    color: #adabb8;
    font-weight: bold;

    &:nth-child(odd) {
      background: #211d3a;
      border-radius: 0.5em;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    }

    &:last-child {
      span {
        font-size: 14px;
        color: #b1147d;
      }
    }
  }
`;
