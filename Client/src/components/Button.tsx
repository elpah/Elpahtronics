import React from 'react';
import styled from 'styled-components';

interface Props {
  buttonName: string;
  onClick?: () => void;
}

const StyledButton = styled.button`
  padding: 10px;
  background-color: rgba(62, 68, 77, 0.2);
  color: #ffffff;
  font-size: 16px;
  font-weight: 300;
  border: 1px solid rgb(239, 159, 70);
  border-radius: 4px;
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
