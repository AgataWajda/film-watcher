import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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

  font-size: 36px;
  font-weight: 700;
  text-decoration: none;
  margin: 0;
`;

export const StyledLink = styled(NavLink)`
  color: rgb(218, 214, 214);
  font-size: 24px;
  font-weight: 700;
  text-decoration: none;

  &.active {
    color: orange;
  }

  &:first-of-type {
    border-right: 3px solid orange;
    padding-right: 20px;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  padding-left: 20px;
  padding-right: 40px;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
  justify-content: space-between;
  background-color: #171717;
  box-shadow: 4px 8px 24px 0px rgba(66, 68, 90, 1);
  position: relative;
  z-index: 99;
`;

export const StyledWrapper = styled.div`
  display: flex;

  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 20px;
  background-color: #171717;
`;
