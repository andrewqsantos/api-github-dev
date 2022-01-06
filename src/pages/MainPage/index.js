/* eslint-disable arrow-body-style */
import React from 'react';
import { MdSearch } from 'react-icons/md';

import { Container, Logo, Title, Form, Input, Button } from './styles';

import githubLogo from '../../assets/images/github-logo.svg';

const MainPage = () => {
  return (
    <Container>
      <Logo src={githubLogo} alt="API Github Logo" />
      <Title>API Github</Title>
      <Form>
        <Input placeholder="usuário" />
        <Button>
          <MdSearch size={42} />
        </Button>
      </Form>
    </Container>
  );
};

export default MainPage;
