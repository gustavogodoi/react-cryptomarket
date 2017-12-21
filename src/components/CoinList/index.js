import React from "react";
import styled from "styled-components";
import Sort from "../Sort";
import CoinCard from "../CoinCard";

const List = styled.div`
  padding-top: 10px;
`;

const ListWrapper = styled.div`
  min-height: 300px;
  padding: 0 15px 30px 15px;
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 1fr;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 50px 30px 50px;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const ListItem = styled.div`
  border: 1px solid lightgray;
  border-radius: 10px;
  box-shadow: 1px 1px darkgrey;
  :hover,
  :focus {
    box-shadow: 2px 2px darkgrey;
  }
`;

const LoadingWrapper = styled.div`
  width: 100%;
  height: 300px;
  text-align: center;
  font-size: 16px;
`;

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
