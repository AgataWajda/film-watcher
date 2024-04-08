import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Conteiner = styled.div`
  padding-top: 30px;
  background-color: rgb(218, 214, 214);
  padding-bottom: 100px;
`;

export const MainConteiner = styled.div`
  padding-left: 20px;
  display: flex;
  gap: 50px;
  padding-top: 20px;
  padding-right: 20px;
`;

export const StyledImg = styled.img`
  box-shadow: 4px 8px 24px 0px rgba(66, 68, 90, 1);
`;

export const StyledMovieTitle = styled.h2`
  font-size: 40px;
  font-weight: 800;
  color: #171717;
  text-shadow: 1px 2px 6px rgb(98, 100, 119);
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  padding-top: 4px;
  font-size: 16px;
  font-weight: 600;

  &:hover {
    color: rgb(197, 98, 32);
  }
`;

export const StyledGoBack = styled(Link)`
  color: black;
  text-decoration: none;
  padding-top: 4px;
  font-size: 20px;
  font-weight: 600;
  padding-left: 20px;

  &:hover {
    color: rgb(197, 98, 32);
  }
`;
