import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { CgMenuGridO } from 'react-icons/cg';
import { AiOutlineHome } from 'react-icons/ai';
import { IoMdSearch } from 'react-icons/io';

export const StyledImg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

export const StyledTitle = styled.h1`
  background-color: red;

  background-image: linear-gradient(45deg, orange, rgb(255, 102, 0));

  background-size: 100%;
  background-repeat: repeat;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;

  font-size: 26px;
  font-weight: 700;
  text-decoration: none;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 40px;
    font-weight: 700;
  }
`;

export const StyledLink = styled(NavLink)`
  color: rgb(218, 214, 214);
  font-size: 35px;
  font-weight: 700;
  text-decoration: none;
  padding-bottom: 35px;
  display: flex;
  gap: 10px;

  &.active {
    color: orange;
  }

  @media (min-width: 768px) {
    font-size: 28px;
    padding-bottom: 0px;

    &:first-of-type {
      border-right: 3px solid orange;
      padding-right: 20px;
    }
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  padding-left: 15px;
  padding-right: 15px;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
  justify-content: space-between;
  background-color: #171717;
  box-shadow: 4px 8px 24px 0px rgba(66, 68, 90, 1);
  position: relative;
  z-index: 99;

  @media (min-width: 768px) {
    padding-left: 20px;
    padding-right: 40px;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;

  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 20px;
  background-color: #171717;
`;

export const StyledMenuIcon = styled(CgMenuGridO)`
  width: 36px;
  height: 36px;

  @media (min-width: 768px) {
    width: 45px;
    height: 45px;
  }
`;

export const StyledButton = styled.button`
  background-color: #171717;
  border: none;
  color: ${props => (props.$isOpen ? 'orange' : 'rgb(218, 214, 214)')};
`;

export const StyledMobileMenu = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #171717;
  display: flex;
  flex-direction: column;
  padding: 200px 40px;

  &.menu-enter {
    transform: translateY(-100%);
  }
  &.menu-enter-active {
    transform: translateY(0);
    transition: transform 300ms ease-in-out;
  }
  &.menu-exit {
    transform: translateY(0);
  }
  &.menu-exit-active {
    transform: translateY(-100%);
    transition: transform 300ms ease-in-out;
  }
`;

export const StyledHomeIcon = styled(AiOutlineHome)`
  width: 35px;
  height: 35px;
`;

export const StyledSearchIcon = styled(IoMdSearch)`
  width: 35px;
  height: 35px;
`;
