import React from 'react';

export default ({ size = '32', symbol = '' }) => (
  <img
    alt=""
    src={`https://raw.githubusercontent.com/cjdowner/cryptocurrency-icons/master/${size}/icon/${symbol.toLowerCase()}.png`}
  />
);
