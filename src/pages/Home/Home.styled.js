import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledConteiner = styled.div`
  padding-left: 20px;
  padding-top: 20px;
  border-top: solid 2px lightgray;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 17px;
  font-weight: 500;
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;

  &:hover {
    color: orange;
  }
`;
