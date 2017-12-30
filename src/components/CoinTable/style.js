import styled from "styled-components";

// variables to responsive table
const widthHeader = {
  rank: "30px",
  symbol: "20px",
  name: "150px",
  value: "100px",
  pct1h: "75px",
  pct24h: "75px",
  pct7d: "75px",
  mktCap: "150px;",
  volume24h: "150px;"
};

const hideMobile = ["mktCap", "volume24h", "pct1h", "value"];
const hideTablet = ["mktCap", "volume24h"];

const alignRight = ["mktCap", "volume24h", "value"];
const alignCenter = ["pct1h", "pct24h", "pct7d"];

export const ListWrapper = styled.div`
  margin-left: 15px;
  margin-right: 15px;
  padding: 10px 15px;
`;

export const ListRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #e0e0e0;
  border-collapse: collapse;
  ${props => (props.header ? "font-weight: bold" : "")};
`;
export const ListItem = styled.div`
  flex: 1 0 auto;
  vertical-align: top;
  text-align: ${props =>
    alignRight.includes(props.type)
      ? "right"
      : alignCenter.includes(props.type) ? "center" : "left"};
  padding-right: 5px;
  width: ${props => widthHeader[props.type]};
  ${props => (hideMobile.includes(props.type) ? "display: none;" : "")};

  @media (min-width: 700px) {
    display: ${props => (hideTablet.includes(props.type) ? "none" : "inline")};
  }

  @media (min-width: 1000px) {
    display: inline;
  }
`;

export const ItemNameWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  img {
    padding-right: 5px;
    width: 20px;
    height: auto;
  }
  @media (min-width: 700px) {
    img {
      width: 30px;
    }
  }
`;

export const PctItem = styled.span`
  font-size: 13px;
  @media (min-width: 700px) {
    font-size: 15px;
  }
`;
