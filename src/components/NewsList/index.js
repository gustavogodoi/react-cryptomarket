import React from "react";
import styled from "styled-components";
import Story from "../Story";

const ListWrapper = styled.div`
  min-height: 300px;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 30px;
`;

const ListItem = styled.div`
  flex: 1 1 100%;
`;

const LoadingWrapper = styled.div`
  width: 100%;
  height: 300px;
  text-align: center;
  font-size: 16px;
`;

const NewsList = ({ list }) => {
  if (!list) {
    return <LoadingWrapper>Loading...</LoadingWrapper>;
  }

  return (
    <ListWrapper>
      {list.map(story => (
        <ListItem key={story.objectID}>
          <Story story={story} />
        </ListItem>
      ))}
    </ListWrapper>
  );
};

export default NewsList;
