import React from "react";
import { Link } from "react-router-dom";
import Sort from "../Sort";
import CoinCard from "../CoinCard";
import CoinTable from "../CoinTable";
import * as st from "./style";

const CoinList = ({ list, sort, updateSort, view }) => {
  let displayList;

  if (!list || !list.length) {
    return <st.LoadingWrapper>Loading...</st.LoadingWrapper>;
  }

  if (view === "grid") {
    displayList = (
      <st.GridWrapper>
        {list.map(coin => (
          <st.GridItem key={coin.id}>
            <CoinCard info={coin} />
          </st.GridItem>
        ))}
      </st.GridWrapper>
    );
  } else {
    displayList = <CoinTable list={list} />;
  }

  return (
    <st.List>
      <st.Menu>
        <Sort sort={sort} updateSort={updateSort} />
        <div>
          View:{" "}
          <span>
            <Link to="table">Table</Link>
          </span>{" "}
          |{" "}
          <span>
            <Link to="grid">Grid</Link>
          </span>
        </div>
      </st.Menu>
      {displayList}
    </st.List>
  );
};

export default CoinList;
