/*eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { SortWrapper, Label, Select } from "./style";

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
