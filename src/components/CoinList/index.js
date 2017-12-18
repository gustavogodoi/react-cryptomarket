import React from "react";
import styled from "styled-components";
import CoinCard from "../CoinCard";

const ListWrapper = styled.div`
  min-height: 300px;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 30px;
`;

const ListItem = styled.div`
  flex: 1 1 100%;
`;

const LoadingWrapper = styled.div`
  width: 100%;
  height: 300px;
  text-align: center;
  font-size: 16px;
`;

const CoinList = ({ list }) => {
  if (!list || !list.length) {
    return <LoadingWrapper>Loading...</LoadingWrapper>;
  }

  return (
    <ListWrapper>
      {list.map(coin => (
        <ListItem key={coin.id}>
          <CoinCard info={coin} />
        </ListItem>
      ))}
    </ListWrapper>
  );
};

export default CoinList;
