import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  image: string;
  header: string;
  paragraph: string;
  brandLink: string;
}

const Card = styled.div`
  height: 100px;
  background-color: rgb(245, 246, 246);
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s ease-in-out, transform 0.1s ease;

  &:hover {
    background-color: rgb(240, 240, 240);
    transform: scale(1.02);
  }
`;

const CardImg = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  margin-right: 20px;
`;

const CardParaHeaderContainer = styled.div``;

const CardHeader = styled.h2`
  font-size: 25px;
  color: #333;
  margin: 0;
`;

const CardParagraph = styled.p`
  font-size: 20px;
  color: #666;
`;

const BrandLink = styled(Link)`
  text-decoration: none;
`;

export default function BrandCard({
  image,
  header,
  paragraph,
  brandLink,
}: Props) {
  return (
    <BrandLink to={brandLink}>
      <Card>
        <CardImg src={image} alt="brand image" />
        <CardParaHeaderContainer>
          <CardHeader>{header}</CardHeader>
          <CardParagraph>{paragraph}</CardParagraph>
        </CardParaHeaderContainer>
      </Card>
    </BrandLink>
  );
}
