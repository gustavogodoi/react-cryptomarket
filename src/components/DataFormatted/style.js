import styled from "styled-components";

export const PctChange = styled.span`
  font-weight: ${props => (props.danger ? "bold" : "normal")};
  color: ${props => (props.danger ? "red" : "green")};
  position: relative;
`;

export const Arrow = styled.div`
  display: inline-block;
  margin: ${props => (props.danger ? "1" : "3")}px 1px;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  ${props =>
    props.danger
      ? "border-top: 5px solid red;"
      : "border-bottom: 5px solid green;"};
`;
