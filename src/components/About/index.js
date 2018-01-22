import React from 'react';
import * as st from './style';
import AboutDev from '../AboutDev';

const About = () => (
  <div>
    <st.AboutWrapper>
      <h1>App</h1>
      <div>
        <p>Follow the Bitcoin trend and all the cryptocurrency market.</p>
        <p>
          Created using React, Redux, Redux-Saga, Styled Components and more.
        </p>
        <br />
        <p>
          <b>Apis:</b>
        </p>
        <p>
          <a
            href="https://coinmarketcap.com/api/"
            rel="noopener noreferrer"
            target="_blank"
          >
            api.coinmarketcap.com
          </a>
        </p>
        <p>
          <a
            href="https://www.cryptocompare.com/api/"
            rel="noopener noreferrer"
            target="_blank"
          >
            min-api.cryptocompare.com
          </a>
        </p>
        <br />
        <p>
          Project on Github:{' '}
          <a
            href="https://github.com/gustavogodoi/react-cryptomarket"
            rel="noopener noreferrer"
            target="_blank"
          >
            react-cryptomarket
          </a>
        </p>
      </div>
    </st.AboutWrapper>

    <div>
      <h1>About Us</h1>
      <st.DevsDiv>
        <AboutDev
          name="Gustavo Godoi"
          photo="https://avatars2.githubusercontent.com/u/4819553"
          github="https://github.com/gustavogodoi"
          linkedin="https://www.linkedin.com/in/gugodoi/"
        />

        <AboutDev
          name="Gary Meehan"
          photo="https://avatars2.githubusercontent.com/u/13333582"
          github="https://github.com/garmeeh"
          linkedin="https://www.linkedin.com/in/gary-meehan-a5948747/"
        />
      </st.DevsDiv>
    </div>
  </div>
);

export default About;
