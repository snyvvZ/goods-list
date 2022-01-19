import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <h1>MUSINSA</h1>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  left: 0;
  top: 0;

  > h1 {
    font-size: 24px;
    font-weight: normal;
  }
`;

export default Header;
