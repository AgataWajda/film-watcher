import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledForm = styled.form`
  height: 100vh;
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

export const StyledInput = styled.input`
  margin: 20px 20px 20px 20px;
  padding: 10px;
  border-radius: 8px;
  width: 300px;
  font-size: 16px;
  font-weight: 500;
  box-shadow: 4px 8px 24px 0px rgba(66, 68, 90, 1);

  &: focus {
    border: 2px solid rgb(255, 102, 0);
    outline: none;
  }
`;

export const StyledButton = styled.button`
  height: 25px;
`;

export const StyledFirstFinder = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  align-items: center;
`;

export const StyledTitle = styled.h1`
  margin: 0;
  padding-bottom: 30px;
  text-align: center;

  color: #171717;
  font-size: 50px;
  font-weight: 900;
`;
