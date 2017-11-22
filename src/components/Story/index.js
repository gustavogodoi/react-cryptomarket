import React from "react";
import styled from "styled-components";

const StoryWrapper = styled.div`
  padding: 20px 20px;
  a {
    text-decoration: none;
    color: #333333;
  }
`;

const StoryTitleWrapper = styled.div`
  padding-bottom: 5px;
`;

const StoryTitle = styled.span`
  padding-right: 10px;
`;

const StoryPoints = styled.span`
  font-size: 10px;
  color: lightgray;
`;

const StoryExtras = styled.div`
  font-size: 12px;
  color: #a9a9a9;
  a {
    text-decoration: none;
    color: #a9a9a9;
  }
  & > span {
    padding: 0 5px;
    border-right: 1px solid lightgray;
    &:first-of-type {
      padding-left: 0;
    }
    &:last-of-type {
      border: 0;
    }
  }
`;

const StoryExtraURL = styled.span`
  display: none;
  @media only screen and (min-width: 600px) {
    display: inline-block;
  }
`;

const NewsList = ({ story }) => {
  const createAt = new Date(story.created_at).toLocaleDateString();
  return (
    <StoryWrapper>
      <StoryTitleWrapper>
        <StoryTitle>
          <a href={story.url} target="_blank">
            {story.title}
          </a>
        </StoryTitle>
        <StoryPoints>[{story.points} points]</StoryPoints>
      </StoryTitleWrapper>
      <StoryExtras>
        <span>
          <a
            href={`https://news.ycombinator.com/item?id=${story.objectID}`}
            target="_blank"
          >
            {story.num_comments} comments
          </a>
        </span>
        <span>{createAt}</span>
        <span>
          author:{" "}
          <a
            href={`https://news.ycombinator.com/user?id=${story.author}`}
            target="_blank"
          >
            {story.author}
          </a>
        </span>
        <StoryExtraURL>
          (<a href={story.url} target="_blank">
            {story.url}
          </a>)
        </StoryExtraURL>
      </StoryExtras>
    </StoryWrapper>
  );
};

export default NewsList;
