import styled from "styled-components";

export const Card = styled.div`
  background: #252041;
  border-radius: 0.5em;
  overflow: hidden;
  max-width: 260px;
  padding-bottom: 20px;
  margin: 15px 10px;

  img {
    max-width: 100%;
    object-fit: cover;
\  }
`;

export const CardName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 20px;
  margin-top: 10px;

  h2 {
    color: #e9e9ec;
    font-size: 16px;
    font-weight: bold;
  }
`;

export const CardIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #b1147d;
  text-shadow: 3px 5px 20px rgba(0, 0, 0, 0.4);
  font-size: 12px;

  span {
    color: #e9e9ec;
    font-size: 16px;
    font-weight: bold;
    margin-left: 5px;
  }
`;

export const Stats = styled.div`
  columns: 2;
  column-rule: 1px solid #adabb8;
  text-align: center;
  gap: 1em;
  margin: 15px 0;
  color: #adabb8;
  font-size: 12px;
  font-weight: bold;

  span {
    display: block;
    color: #b1147d;
    font-size: 12px;
  }
`;

export const CardButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;
`;
