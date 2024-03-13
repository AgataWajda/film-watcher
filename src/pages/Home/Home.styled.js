import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledConteiner = styled.div`
  padding: 15px;
  border-top: solid 2px lightgray;
  background-color: rgb(218, 214, 214);
`;

export const StyledTitle = styled.h1`
  text-align: center;
  margin-bottom: 50px;
  color: #171717;
  font-size: 40px;
  font-weight: 900;
`;

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  font-size: 17px;
  font-weight: 500;
  padding: 0;
`;

export const StyledLi = styled.li`
  background-color: #171717;
  border-radius: 7px;
  padding: 20px 10px;
  box-shadow: 4px 8px 24px 0px rgba(66, 68, 90, 1);
  margin-bottom: 20px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  width: 200px;
  color: rgb(218, 214, 214);

  &:hover {
    color: rgb(197, 98, 32);
  }
`;

export const StyledImg = styled.img`
  width: 170px;
  height: 260px;
  border-radius: 7px;
`;

export const StyledText = styled.h2`
  font-size: 20px;
  text-align: center;
  line-height: 1.5;
`;
