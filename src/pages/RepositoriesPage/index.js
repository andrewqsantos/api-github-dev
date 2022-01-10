/* eslint-disable arrow-body-style */
import React from 'react';

import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

import { Container, Sidebar, Main } from './styles';

import { getLangsFrom } from '../../services/api';

const RepositoriesPage = () => {
  const user = {
    login: 'andrewqsantos',
    name: 'Andrew Quenehen',
    avatar_url: 'https://avatars.githubusercontent.com/u/56467992?v=4',
    followers: 36,
    following: 59,
    company: null,
    blog: null,
    location: 'Brazil',
  };

  const repositories = [
    {
      name: 'Repo 1',
      desciption: 'Descrição',
      html_url: 'https://devsamurai.com.br',
      languague: 'JavaScript',
    },
    {
      name: 'Repo 2',
      desciption: 'Descrição',
      html_url: 'https://devsamurai.com.br',
      languague: 'JavaScript',
    },
    {
      name: 'Repo 3',
      desciption: 'Descrição',
      html_url: 'https://devsamurai.com.br',
      languague: 'PHP',
    },
    {
      name: 'Repo 4',
      desciption: 'Descrição',
      html_url: 'https://devsamurai.com.br',
      languague: null,
    },
    {
      name: 'Repo 5',
      desciption: 'Descrição',
      html_url: 'https://devsamurai.com.br',
      languague: 'TypeScript',
    },
    {
      name: 'Repo 6',
      desciption: 'Descrição',
      html_url: 'https://devsamurai.com.br',
      languague: 'TypeScript',
    },
  ];

  const languages = getLangsFrom(repositories);

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter languages={languages} />
      </Sidebar>
      <Main>
        <Repositories />
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
