import styled from "styled-components";

export const Wrapper = styled.div`
  width: calc(100% - 100px);
  padding: 20px;
  padding-top: 30px;

  @media screen and (max-width: 525px) {
    width: calc(100% - 68px);
  }
`;
