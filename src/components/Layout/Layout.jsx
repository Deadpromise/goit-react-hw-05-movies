import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import {
  HeadContainer,
  Header,
  StyledLink,
  MainContainer,
} from './Layout.styled';

export const Layout = () => {
  return (
    <HeadContainer>
      <Header>
        <ul>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/movies">Movies</StyledLink>
          </li>
        </ul>
      </Header>
      <main>
        <MainContainer>
          {' '}
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </MainContainer>
      </main>
    </HeadContainer>
  );
};
