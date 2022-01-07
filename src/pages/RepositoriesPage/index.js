/* eslint-disable arrow-body-style */
import React from 'react';

import Profile from './Profile';

import { Container, Sidebar, Main } from './styles';

const RepositoriesPage = () => {
  return (
    <Container>
      <Sidebar>
        <Profile />
      </Sidebar>
      <Main>Main</Main>
    </Container>
  );
};

export default RepositoriesPage;
