import React from "react";
import * as st from "./style";

function MoneyFormat(labelValue, decimals) {
  // Nine Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e9
    ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(2) + "B"
    : // Six Zeroes for Millions
      Math.abs(Number(labelValue)) >= 1.0e6
      ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(2) + "M"
      : Number(Number(labelValue).toFixed(2)).toLocaleString(undefined, {
          minimumFractionDigits: decimals
        });
}

export const PriceEur = (value, decimals = 2) => {
  return value
    ? `€${MoneyFormat(value, decimals)}`
    : // `€${Number(Number(value).toFixed(2)).toLocaleString(undefined, {
      //     minimumFractionDigits: decimals
      //   })}`
      "-";
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
