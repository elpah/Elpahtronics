import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  paragraph: string;
  contact: string;
  icon: ReactElement;
}

const ContactCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  position: relative;
  width: 90%;
  min-width: 250px;
  margin: 20px auto;
  height: 280px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const FaDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -20px;
  left: -20px;
  background-color: #fff;
  width: 40px;
  height: 40px;
  border: 2px solid black;
  border-radius: 50%;
  font-size: 20px;
`;

const DetailsDiv = styled.div`
  margin-top: 30px;
`;

const Header = styled.h2`
  font-size: 25px;
  padding-bottom: 10px;
`;

const Para = styled.p`
  font-size: 19px;
`;

const Det = styled.h3`
  font-size: 18px;
  color: #777;
  font-weight: 400;
  margin-top: 5px;

  &:hover {
    color: red;
    cursor: pointer;
  }
`;

export default function ContactCard({ title, paragraph, contact, icon }: Props) {
  return (
    <ContactCardContainer>
      <FaDiv>{icon}</FaDiv>
      <DetailsDiv>
        <Header>{title}</Header>
        <Para>{paragraph}</Para>
        <Det>{contact}</Det>
      </DetailsDiv>
    </ContactCardContainer>
  );
}
