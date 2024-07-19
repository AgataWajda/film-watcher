import {
  StyledImg,
  StyledLink,
  StyledNav,
  StyledTitle,
  StyledWrapper,
  StyledMenuIcon,
  StyledButton,
  StyledMobileMenu,
  StyledHomeIcon,
  StyledSearchIcon,
} from './MainConteiner.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

const MainConteiner = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const nodeRef = useRef(null);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  const handleClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
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
          {!isMobile ? (
            <StyledWrapper>
              <StyledLink to="/">Home</StyledLink>
              <StyledLink to="/movies">Find movie</StyledLink>
            </StyledWrapper>
          ) : (
            <StyledButton
              type="button"
              $isOpen={isModalOpen}
              onClick={handleClick}
            >
              <StyledMenuIcon></StyledMenuIcon>
            </StyledButton>
          )}
        </StyledNav>

        <CSSTransition
          in={isModalOpen}
          timeout={300}
          classNames="menu"
          unmountOnExit
          nodeRef={nodeRef}
        >
          <StyledMobileMenu ref={nodeRef}>
            {' '}
            <StyledLink to="/" onClick={handleClick}>
              <StyledHomeIcon />
              Home
            </StyledLink>
            <StyledLink to="/movies" onClick={handleClick}>
              <StyledSearchIcon />
              Find movie
            </StyledLink>
          </StyledMobileMenu>
        </CSSTransition>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MainConteiner;
