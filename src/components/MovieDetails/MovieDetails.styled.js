import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainConteiner = styled.div`
  padding-left: 20px;
  display: flex;
  gap: 20px;
  padding-top: 10px;
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  padding-top: 4px;
  font-size: 16px;
  font-weight: 500;

  &:hover {
    color: orange;
  }
`;

export const StyledGoBack = styled(Link)`
  color: black;
  text-decoration: none;
  padding-top: 4px;
  font-size: 16px;
  font-weight: 500;
  padding-left: 20px;

  &:hover {
    color: orange;
  }
`;
