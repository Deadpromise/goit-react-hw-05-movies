import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { StyledLink } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <header>
        <ul>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/movies">Movies</StyledLink>
          </li>
        </ul>
      </header>
    </>
  );
};
