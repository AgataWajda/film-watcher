import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledForm = styled.form``;

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
  margin: 20px 0px 20px 20px;
  height: 20px;
  font-size: 16px;
  font-weight: 500;
`;

export const StyledButton = styled.button`
  height: 25px;
`;
