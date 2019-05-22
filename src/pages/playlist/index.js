import React from 'react';

import { Container, Header, SongList } from './styles';

import CLockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

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
        <p>13 músicas</p>
        <button type="button" onClick={() => {}}>
          Play
        </button>
      </div>
    </Header>

    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <tr>
          <th />
          <th>Título</th>
          <th>Artista</th>
          <th>Álbum</th>
          <th>
            <img src={CLockIcon} alt="Duração" />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid</td>
          <td>3:28</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid</td>
          <td>3:28</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid</td>
          <td>3:28</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid</td>
          <td>3:28</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
