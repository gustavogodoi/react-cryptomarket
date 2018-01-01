import React from "react";
import { SortWrapper, Label, Select } from "./style";

const Sort = ({ sort, updateSort }) => (
  <SortWrapper>
    <Label>Sort by:</Label>
    <Select id="sort-select" value={sort} onChange={updateSort}>
      <option value="rank">Rank</option>
      <option value="price_eur">Price</option>
      <option value="24h_volume_eur">Volume 24h</option>
      <option value="percent_change_1h">Change 1h</option>
      <option value="percent_change_24h">Change 24h</option>
      <option value="percent_change_7d">Change 7d</option>
    </Select>
  </SortWrapper>
);

export default Sort;
