import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
  categoryName: string;
  categoryLink: string;
  categoryImage: string;
}

const CategoryItemContainer = styled.div<{ backgroundImage: string }>`
  background-image: url(${(props) => props.backgroundImage});no-repeat;
  background-size: cover;
  aspect-ratio:4/5;
 
  padding:10px;
  margin-top:20px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  @media (min-width: 768px){

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
