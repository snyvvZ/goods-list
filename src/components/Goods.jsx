import React from "react";
import styled from "styled-components";

const Goods = () => {
  return (
    <StyledGoodsUl>
      <li>상품목록</li>
    </StyledGoodsUl>
  );
};

const StyledGoodsUl = styled.ul`
  display: flex;
`;

export default Goods;
