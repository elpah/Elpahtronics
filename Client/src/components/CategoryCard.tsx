import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
  categoryName: string;
  categoryLink: string;
  categoryImage: string;
}

const CategoryItemContainer = styled.div<{ backgroundImage: string }>`
  position: relative;
  aspect-ratio: 4/5;
  max-width: 280px;
  padding: 10px;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    transition: transform 0.3s ease;
    transform-origin: center center;
    transform: scale(1);
  }

  &:hover::before {
    transform: scale(1.2);
  }
`;
const CatLink = styled(Link)`
  text-decoration: none;
`;
const CategoryParagraph = styled.p`
  font-size: 30px;
  color: white;
  margin-top: 0;
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`;
const CategoryItem = ({ categoryName, categoryLink, categoryImage }: Props) => {
  return (
    <CatLink to={categoryLink}>
      <CategoryItemContainer backgroundImage={categoryImage}>
        <CategoryParagraph>{categoryName}</CategoryParagraph>
      </CategoryItemContainer>
    </CatLink>
  );
};

export default CategoryItem;
