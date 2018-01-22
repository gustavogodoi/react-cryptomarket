import React from 'react';
import * as st from './style';
import * as icons from '../CommonFields/icons';

const AboutDev = ({ name, photo, github, linkedin }) => (
  <st.DevWrapper>
    <st.ImageWrapper>
      <st.ProfilePicture src={photo} alt={`${name}'s profile pricture`} />
    </st.ImageWrapper>
    <st.DevName>{name}</st.DevName>
    <st.DevDescription>
      <div>
        <a href={github} target="_blank">
          <img src={icons.github} alt={`${name} Github`} />
        </a>
      </div>
      <div>
        <a href={linkedin} target="_blank">
          <img src={icons.linkedin} alt={`${name} LinkedIn`} />
        </a>
      </div>
    </st.DevDescription>
  </st.DevWrapper>
);

export default AboutDev;
