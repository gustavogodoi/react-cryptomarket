import React from 'react';

export default ({ size = '32', symbol = '' }) => (
  <img
    alt={`Logo for ${symbol}`}
    src={`https://raw.githubusercontent.com/cjdowner/cryptocurrency-icons/master/${size}/icon/${symbol.toLowerCase()}.png`}
  />
);
