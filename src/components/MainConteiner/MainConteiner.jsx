import { StyledLink, StyledNav } from './MainConteiner.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const MainConteiner = () => (
  <div>
    <header>
      <StyledNav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </StyledNav>
    </header>
    <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
    </Suspense>
  </div>
);
