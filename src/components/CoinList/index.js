import React from "react";
import Sort from "../Sort";
import CoinCard from "../CoinCard";
import { List, ListWrapper, ListItem, LoadingWrapper } from "./style";

const CoinList = ({ list, sort, updateSort }) => {
  if (!list || !list.length) {
    return <LoadingWrapper>Loading...</LoadingWrapper>;
  }

  return (
    <List>
      <Sort sort={sort} updateSort={updateSort} />
      <ListWrapper>
        {list.map(coin => (
          <ListItem key={coin.id}>
            <CoinCard info={coin} />
          </ListItem>
        ))}
      </ListWrapper>
    </List>
  );
};

export default CoinList;
