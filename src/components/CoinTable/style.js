import styled from "styled-components";

// variables to responsive table
const widthHeader = {
  rank: 30,
  symbol: 20,
  name: 120,
  value: 100,
  pct1h: 75,
  pct24h: 75,
  pct7d: 75,
  mktCap: 120,
  volume24h: 120
};

const hideMobile = ["mktCap", "volume24h", "pct1h"];
const hideTablet = ["volume24h"];

const alignRight = ["mktCap", "volume24h", "value"];
const alignCenter = ["pct1h", "pct24h", "pct7d"];

export const ListWrapper = styled.div``;

export const ListRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
  min-width: 345px;
  padding: 8px 15px;
  border-bottom: 1px solid #e0e0e0;
  border-right: 1px solid #dee0e0;
  border-left: 1px solid #dee0e0;
  background-color: #f2f2f2;
  border-collapse: collapse;
  font-size: 13px;
  @media (min-width: 700px) {
    font-size: 15px;
  }
  :hover,
  :focus {
    background-color: white;
  }
`;

export const ListHeader = ListRow.extend`
  text-transform: uppercase;
  font-size: 13px;
  font-weight: bold;
  background-color: white;

  @media (min-width: 700px) {
    font-size: 13px;
  }

  :hover,
  :focus {
    background-color: white;
  }
`;

export const ListItem = styled.div`
  flex: 1 0 auto;
  vertical-align: top;
  text-align: ${props =>
    alignRight.includes(props.type)
      ? "right"
      : alignCenter.includes(props.type) ? "center" : "left"};
  margin-right: 5px;
  width: ${props =>
    widthHeader[props.type] -
    widthHeader[props.type] / 100 * 30}px; //30% smaller for mobile
  ${props => (hideMobile.includes(props.type) ? "display: none;" : "")};

  @media (min-width: 700px) {
    display: ${props => (hideTablet.includes(props.type) ? "none" : "inline")};
    width: ${props => widthHeader[props.type]}px;
  }

  @media (min-width: 1000px) {
    display: inline;
  }
`;

export const ListItemHeader = ListItem.extend`
  ${props => (props.selected ? "color: palevioletred" : "")};
  cursor: pointer;
`;

export const ItemNameWrapper = styled.div`
  font-size: 15px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  img {
    margin-right: 5px;
    width: 20px;
    height: auto;
  }
  @media (min-width: 700px) {
    img {
      width: 25px;
    }
  }
`;

export const PctItem = styled.span``;

export const NameSmall = styled.span`
  cursor: pointer;
  text-decoration: solid;
  display: inline;
  @media (min-width: 700px) {
    display: none;
  }
`;

export const NameFull = styled.span`
  cursor: pointer;
  text-decoration: underline;
  display: none;
  @media (min-width: 700px) {
    display: inline;
  }
`;

export const FavoriteWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
