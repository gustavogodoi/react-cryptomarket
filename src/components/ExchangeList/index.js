import React from 'react';

const ExchangeList = ({ exchanges = [] }) => (
  <table>
    <tbody>
      <tr>
        <th>Market</th>
        <th>Price</th>
        <th>Open 24H</th>
        <th>Range 24h</th>
        <th>Last Trade</th>
        <th>Volume 24H</th>
        <th>Change 24H</th>
      </tr>
      {exchanges.map(data => (
        <tr>
          <td>{data.MARKET}</td>
          <td>{data.PRICE}</td>
          <td>{data.OPEN24HOUR}</td>
          <td>
            Low {data.LOW24HOUR} High: {data.HIGH24HOUR}
          </td>
          <td>
            {data.FROMSYMBOL}
            {data.LASTVOLUME} {data.TOSYMBOL}
            {data.LASTVOLUMETO}
          </td>
          <td>
            {data.FROMSYMBOL}
            {data.VOLUME24HOUR} {data.TOSYMBOL}
            {data.VOLUME24HOURTO}
          </td>
          <td>
            {data.LOW24HOUR} - {data.HIGH24HOUR}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ExchangeList;
