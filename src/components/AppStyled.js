import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: black;
  font-size: 24px;
  font-weight: 700;
  text-decoration: none;

  &.active {
    color: orange;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  gap: 20px;
`;
