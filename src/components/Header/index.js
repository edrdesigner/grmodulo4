import React from 'react';
import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>

    <User>
      <img src="https://avatars3.githubusercontent.com/u/1071021?v=4" alt="Avatar" />
      Eduardo Reichert
    </User>
  </Container>
);

export default Header;
