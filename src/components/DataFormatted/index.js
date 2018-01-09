import React from "react";
import * as st from "./style";

export const PriceEur = (value, decimals = 2) => {
  return value
    ? `€${Number(Number(value).toFixed(2)).toLocaleString(undefined, {
        minimumFractionDigits: decimals
      })}`
    : "-";
};

export const PctChange = ({ percentChange }) => {
  percentChange = Number(percentChange).toFixed(1);
  return (
    <React.Fragment>
      <st.PctChange danger={percentChange < 0}>{percentChange}%</st.PctChange>
      <st.Arrow danger={percentChange < 0} />
    </React.Fragment>
  );
};
