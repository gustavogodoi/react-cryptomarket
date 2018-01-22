import styled from 'styled-components';

export const DevsDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 50px;
`;

export const DevWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  grid-gap: 10px;
`;

export const ImageWrapper = styled.div`
  text-align: center;
`;

export const ProfilePicture = styled.img`
  width: 200px;
  height: auto;
  border-radius: 50%;
`;

export const DevName = styled.div`
  text-align: center;
  font-size: 17px;
  font-weight: 500;
`;

export const DevDescription = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  justify-items: center;
  grid-gap: 15px;

  img {
    width: 28px;
    height: 28px;
  }
`;
