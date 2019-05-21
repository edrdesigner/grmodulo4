import React from 'react';
import {
  Container, Title, List, Playlist,
} from './styles';

const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <Playlist to="/playlists/1">
        <img
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/448319b4b1b43f8324abc31cee74b401_screen.jpg?ts=1476426364"
          alt="playlist"
        />
        <strong>Rock dos bons</strong>
        <p>Relache enquanto você programa</p>
      </Playlist>

      <Playlist to="/playlists/1">
        <img
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/448319b4b1b43f8324abc31cee74b401_screen.jpg?ts=1476426364"
          alt="playlist"
        />
        <strong>Rock dos bons</strong>
        <p>Relache enquanto você programa</p>
      </Playlist>

      <Playlist to="/playlists/1">
        <img
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/448319b4b1b43f8324abc31cee74b401_screen.jpg?ts=1476426364"
          alt="playlist"
        />
        <strong>Rock dos bons</strong>
        <p>Relache enquanto você programa</p>
      </Playlist>

      <Playlist to="/playlists/1">
        <img
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/448319b4b1b43f8324abc31cee74b401_screen.jpg?ts=1476426364"
          alt="playlist"
        />
        <strong>Rock dos bons</strong>
        <p>Relache enquanto você programa</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
