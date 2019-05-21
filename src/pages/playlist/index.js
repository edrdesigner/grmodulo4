import React from 'react';

import { Container, Header } from './styles';

const Playlist = () => (
  <Container>
    <Header>
      <img
        src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/448319b4b1b43f8324abc31cee74b401_screen.jpg?ts=1476426364"
        alt="playlist"
      />
      <div>
        <span>PLAYLIST</span>
        <h1>Rock Forever</h1>
        <p>13 musicas</p>
        <button type="button" onClick={() => {}}>
          Play
        </button>
      </div>
    </Header>
  </Container>
);

export default Playlist;
