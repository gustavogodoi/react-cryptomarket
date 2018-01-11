import React from "react";
import FlipMove from "react-flip-move";
import Sort from "../Sort";
import CoinCard from "../CoinCard";
import CoinTable from "../CoinTable";
import * as st from "./style";

const CoinList = ({ list, sort, view }) => {
  let displayList;

  if (!list || !list.length) {
    return <st.LoadingWrapper>Loading...</st.LoadingWrapper>;
  }

  if (view === "grid") {
    displayList = (
      <st.GridWrapper>
        {/* <FlipMove staggerDurationBy="30" duration={500} typeName="div"> */}
        {list.map(coin => (
          <st.GridItem key={coin.id}>
            <CoinCard info={coin} />
          </st.GridItem>
        ))}
        {/* </FlipMove> */}
      </st.GridWrapper>
    );
  } else {
    displayList = <CoinTable list={list} />;
  }

  return (
    <st.List>
      <st.Menu>
        <Sort sort={sort} />
      </st.Menu>
      {displayList}
    </st.List>
  );
};

export default CoinList;
