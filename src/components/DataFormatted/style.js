import styled from "styled-components";

export const PctWrapper = styled.span`
  white-space: nowrap;
`;

export const PctChange = styled.span`
  font-weight: ${props => (props.danger ? "bold" : "normal")};
  color: ${props => (props.danger ? "red" : "green")};
  position: relative;
`;

export const Arrow = styled.div`
  display: inline-block;
  margin: ${props => (props.danger ? "2" : "3")}px 2px;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  ${props =>
    props.danger
      ? "border-top: 4px solid red;"
      : "border-bottom: 4px solid green;"};
`;
