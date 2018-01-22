import styled from 'styled-components';

export const AboutWrapper = styled.div`
  margin-bottom: 50px;

  p {
    padding-left: 30px;
  }
`;

export const DevsDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 50px;
`;
