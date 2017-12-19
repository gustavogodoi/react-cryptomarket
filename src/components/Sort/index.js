/*eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import styled from "styled-components";

const SortWrapper = styled.div`
  padding: 0 0 20px 20px;
  max-width: 200px;
`;

const Label = styled.span`
  padding-right: 5px;
`;

const Select = styled.select`
  width: 100px;
`;

const Sort = ({ sort, updateSort }) => (
  <SortWrapper>
    <Label>Sort by:</Label>
    <Select id="sort-select" value={sort} onChange={updateSort}>
      <option value="rank">Rank</option>
      <option value="price_eur">Price</option>
    </Select>
  </SortWrapper>
);

export default Sort;
