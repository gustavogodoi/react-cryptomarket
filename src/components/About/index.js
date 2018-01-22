import React from 'react';
import * as st from './style';
import * as icons from '../CommonFields/icons';

const About = () => (
  <div>
    <div>
      <h1>App</h1>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Diam in arcu cursus
        euismod quis. Cras sed felis eget velit aliquet sagittis. Enim blandit
        volutpat maecenas volutpat blandit aliquam etiam. Rutrum tellus
        pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Massa
        tincidunt dui ut ornare lectus sit amet est. Pellentesque adipiscing
        commodo elit at. Odio tempor orci dapibus ultrices in. Pharetra diam sit
        amet nisl suscipit adipiscing bibendum est ultricies. Sollicitudin
        aliquam ultrices sagittis orci a scelerisque purus semper eget. Odio
        tempor orci dapibus ultrices in. Etiam erat velit scelerisque in dictum
        non consectetur a. Fermentum leo vel orci porta non pulvinar neque.
        Vivamus at augue eget arcu dictum varius duis at. Mi in nulla posuere
        sollicitudin. Odio ut enim blandit volutpat maecenas. Nam at lectus urna
        duis convallis convallis. Leo integer malesuada nunc vel risus commodo
        viverra maecenas accumsan. Purus sit amet volutpat consequat mauris
        nunc. Elit at imperdiet dui accumsan. Laoreet id donec ultrices
        tincidunt. Iaculis eu non diam phasellus vestibulum lorem sed risus.
        Urna molestie at elementum eu.
      </div>
    </div>

    <div>
      <h1>About Us</h1>
      <st.DevsDiv>
        <st.DevWrapper>
          <st.ImageWrapper>
            <st.ProfilePicture
              src="https://avatars2.githubusercontent.com/u/4819553"
              alt="Gustavo's profile pricture"
            />
          </st.ImageWrapper>
          <st.DevName>Gustavo Godoi</st.DevName>
          <st.DevDescription>
            <div>
              <a href={`https://github.com/gustavogodoi`} target="_blank">
                <img src={icons.github} alt="GitHub" />
              </a>
            </div>
            <div>
              <a href={`https://www.linkedin.com/in/gugodoi/`} target="_blank">
                <img src={icons.linkedin} alt="LinkedIn" />
              </a>
            </div>
          </st.DevDescription>
        </st.DevWrapper>
        <st.DevWrapper>
          <st.ImageWrapper>
            <st.ProfilePicture
              src="https://avatars2.githubusercontent.com/u/13333582"
              alt="Gary's profile pricture"
            />
          </st.ImageWrapper>
          <st.DevName>Gary Meehan</st.DevName>
          <st.DevDescription>
            <div>
              <a href={`https://github.com/garmeeh`} target="_blank">
                <img src={icons.github} alt="GitHub" />
              </a>
            </div>
            <div>
              <a
                href={`https://www.linkedin.com/in/gary-meehan-a5948747/`}
                target="_blank"
              >
                <img src={icons.linkedin} alt="LinkedIn" />
              </a>
            </div>
          </st.DevDescription>
        </st.DevWrapper>
      </st.DevsDiv>
    </div>
  </div>
);

export default About;
