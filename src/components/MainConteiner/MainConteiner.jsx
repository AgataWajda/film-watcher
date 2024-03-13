import {
  StyledImg,
  StyledLink,
  StyledNav,
  StyledTitle,
  StyledWrapper,
} from './MainConteiner.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const MainConteiner = () => (
  <div>
    <header>
      <StyledNav>
        <StyledWrapper>
          <StyledImg
            src={require('../MainConteiner/logo512.png')}
            alt="Film site logo"
          />
          <StyledTitle>Film site</StyledTitle>
        </StyledWrapper>
        <StyledWrapper>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Find movie</StyledLink>
        </StyledWrapper>
      </StyledNav>
    </header>
    <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
    </Suspense>
  </div>
);

export default MainConteiner;
