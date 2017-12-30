import styled from "styled-components";

// variables to responsive table
const widthHeader = {
  rank: "20px",
  symbol: "20px",
  name: "120px",
  value: "100px",
  pct: "50px"
};

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
  width: ${props => widthHeader[props.type]};
`;
