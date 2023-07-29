import React from 'react';
import styled from 'styled-components';

interface Props {
  buttonName: string;
  onClick?: () => void;
}

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: rgb(62, 68, 77);
  color: #ffffff;
  font-size: 16px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 25px;

  &:hover {
    background-color: rgb(155, 130, 28);
  }
  @media (min-width: 768px) {
    font-size: 25px;
    margin-top: 40px;
  }
  @media (min-width: 1198px) {
    font-size: 30px;
    margin-top: 55px;
  }
`;
export default function Button({ buttonName, onClick }: Props) {
  return <StyledButton onClick={onClick}>{buttonName}</StyledButton>;
}
