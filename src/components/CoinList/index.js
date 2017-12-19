import React from "react";
import styled from "styled-components";
import CoinCard from "../CoinCard";

const ListWrapper = styled.div`
  min-height: 300px;
  padding: 0 15px 30px 15px;
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
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
