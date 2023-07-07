import React, { useState } from "react";
import TopBar from "../components/TopBar";
import styled from "styled-components";
import {
  appleLogo,
  ikeaLogo,
  sonyLogo,
  zaraLogo,
  furniture,
  sneakers,
  bags,
  books,
  tech,
  travel,
} from "../assets/images/exportImages";
import CategoryCard from "../components/CategoryCard";
import BrandCard from "../components/BrandCard";
import Footer from "../components/Footer";

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderDiv = styled.div`
  height: 400px;
  width: 100%;
  background: url("https://images.unsplash.com/photo-1518481852452-9415b262eba4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80")
    no-repeat;
  background-size: cover;
  @media (min-width: 768px) {
    height: 500px;

    margin: auto;
  }
  @media (min-width: 1198px) {
    height: 600px;
  }
`;
const HeaderContainer = styled.div`
  width: 90%;
  margin: auto;
  max-width: 1400px;
`;
const Header = styled.h2`
  max-width: 1400px;
  display: flex;
  white-space: pre-line;
  font-size: 37px;
  font-weight: 800;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-top: 80px;
  margin-bottom: 25px;
  line-height: 1.3;
  @media (min-width: 768px) {
    font-size: 50px;
    margin-top: 100px;
  }
  @media (min-width: 1198px) {
    font-size: 65px;
  }
`;
const Para = styled.p`
  white-space: pre-line;
  line-height: 1.1;
  font-size: 18px;
  max-width: 75%;
  color: rgb(221, 187, 69);
  background-color: rgba(68, 64, 56, 0.6);
  @media (min-width: 768px) {
    font-size: 2.5vw;
    width: 60%;
  }
  @media (min-width: 1198px) {
    // max-width: 90%;
    font-size: 2vw;
  }
`;

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

const CategoryHeader = styled.h2`
  text-align: center;
  margin: auto;
  display: flex;
  font-size: 30px;
  margin-top: 50px;
  @media (min-width: 768px) {
    font-size: 40px;
  }
`;
const CategoryCardContainer = styled.div`
  width: 90%;
  max-width:1400px;
  margin:auto;
  display: grid;
  grid-template-columns:repeat(2, 1fr);
  grid-gap: 8px;
  @media (min-width: 768px) {
    padding:0;
    width:90%;
    margin:auto;
    grid-template-columns:repeat(3, 1fr);
    grid-gap: 8px;

    &:hover {
      > img {
        transform: scale(1.1);
      }
    }
  }
  
  @media (min-width: 1200px) {
    padding:0px;
    grid-template-columns:repeat(6, 1fr);
    width:80%
    margin:auto;
    
  }
`;
const BrandCardContainer = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 30px auto 50px;
  display: grid;
  grid-gap: 15px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
type CategoriesOrBrand = {
  paragraph: string;
  header?: any;
  image: string;
  link: string;
};

const HomePage = () => {
  const [categories, setCategories] = useState<CategoriesOrBrand[]>([
    {
      paragraph: "Furniture",
      image: furniture,
      link: "somelink",
    },
    {
      paragraph: "Bags",
      image: bags,
      link: "somelink",
    },
    {
      paragraph: "Books",
      image: books,
      link: "somelink",
    },
    {
      paragraph: "Tech",
      image: tech,
      link: "somelink",
    },
    {
      paragraph: "Sneakers",
      image: sneakers,
      link: "somelink",
    },
    {
      paragraph: "Travel",
      image: travel,
      link: "somelink",
    },
  ]);
  const [brands, setBrands] = useState<CategoriesOrBrand[]>([
    {
      header: "Apple",
      paragraph: "Delivery in 24 hours",
      image: appleLogo,
      link: "someling",
    },
    {
      header: "Ikea",
      paragraph: "Delivery in 24 hours",
      image: ikeaLogo,
      link: "someling",
    },
    {
      header: "Sony",
      paragraph: "Delivery in 24 hours",
      image: sonyLogo,

      link: "someling",
    },
    {
      header: "Zara",
      paragraph: "Delivery in 24 hours",
      image: zaraLogo,
      link: "someling",
    },
  ]);
  return (
    <div>
      <HomePageContainer>
        <HeaderDiv>
          <HeaderContainer>
            <Header>
              Shopping And
              {"\n"}
              Department Store...
            </Header>
            <Para>
              Shopping is a bit of a relaxing hobby for me, which is sometimes
              troubling for the bank balance.
            </Para>
            <StyledButton>shop now</StyledButton>
          </HeaderContainer>
        </HeaderDiv>
        <CategoryHeader>Shop some of categories</CategoryHeader>
        <CategoryCardContainer>
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              categoryName={category.paragraph}
              categoryLink={category.link}
              categoryImage={category.image}
            />
          ))}
        </CategoryCardContainer>
        <CategoryHeader>Choose By Brand</CategoryHeader>
        <BrandCardContainer>
          {brands.map((brand, index) => (
            <BrandCard
              key={index}
              image={brand.image}
              header={brand.header}
              paragraph={brand.paragraph}
              brandLink={brand.link}
            />
          ))}
        </BrandCardContainer>
        <Footer />
      </HomePageContainer>
    </div>
  );
};

export default HomePage;
