import { StyledLink, StyledNav } from './MainConteiner.styled';
import { Outlet } from 'react-router-dom';

export const MainConteiner = () => (
  <div>
    <header>
      <StyledNav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </StyledNav>
    </header>
    <Outlet />
  </div>
);
