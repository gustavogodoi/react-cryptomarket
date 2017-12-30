import React from "react";
import * as st from "./style";

export const PriceEur = value => {
  return value ? `€${Number(Number(value).toFixed(2)).toLocaleString()}` : "-";
};

export const PctChange = ({ percentChange }) => {
  return (
    <React.Fragment>
      <st.Arrow danger={percentChange < 0} />
      <st.PctChange danger={percentChange < 0}>{percentChange}%</st.PctChange>
    </React.Fragment>
  );
};
