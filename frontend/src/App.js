import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import Login from './Login';
import Register from './Register';
import Jokes from './Jokes';
import PrivateRoute from './PrivateRoute';
import AuthButton from './AuthButton';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  width: 800px;
  margin: 0 auto;
`;

const TopNav = styled.nav`
  display: flex;
  justify-content: space-around;
  font-size: 3rem;
  padding: 1rem 0;
  margin-bottom: 1rem;
`;

const AppMain = styled.main`
  display: flex;
  flex-direction: column;
`;

export default () => {
  return (
    <AppWrapper>
      <header>
        <TopNav>
          <span>Dad Jokes</span>
        </TopNav>
      </header>
      <AppMain>
        <AuthButton />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute exact path="/" component={Jokes} />
      </AppMain>
    </AppWrapper>
  );
};
