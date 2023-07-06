import React, { useState } from "react";
import TopBar from "../components/TopBar";
import styled from "styled-components";
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
    // background: url("https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2205&q=80")
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
  // margin-left: 20px;
  margin-bottom: 25px;
  line-height: 1.3;
  @media (min-width: 768px) {
    font-size: 50px;
    // margin-left: 60px;
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
      image:
        "https://images.unsplash.com/photo-1610041321327-b794c052db27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhlYWRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      link: "somelink",
    },
    {
      paragraph: "Bags",
      image:
        "https://images.unsplash.com/photo-1610041321327-b794c052db27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhlYWRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      link: "somelink",
    },
    {
      paragraph: "Books",
      image:
        "https://images.unsplash.com/photo-1610041321327-b794c052db27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhlYWRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      link: "somelink",
    },
    {
      paragraph: "Tech",
      image:
        "https://images.unsplash.com/photo-1610041321327-b794c052db27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhlYWRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      link: "somelink",
    },
    {
      paragraph: "Sneakers",
      image:
        "https://images.unsplash.com/photo-1610041321327-b794c052db27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhlYWRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      link: "somelink",
    },
    {
      paragraph: "Travel",
      image:
        "https://images.unsplash.com/photo-1610041321327-b794c052db27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhlYWRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      link: "somelink",
    },
  ]);
  const [brands, setBrands] = useState<CategoriesOrBrand[]>([
    {
      header: "loremIpsum",
      paragraph: "Lorem ipsum dolor sit amet,",
      image:
        "https://www.logolynx.com/images/logolynx/67/6757ecb0ecd35f833b975d2306ec5c62.jpeg",
      link: "someling",
    },
    {
      header: "loremIpsum",
      paragraph: "Lorem ipsum dolor sit amet,",
      image:
        "https://www.logolynx.com/images/logolynx/64/646c2e3dd4797516757703b3c61c889f.jpeg",

      link: "someling",
    },
    {
      header: "loremIpsum",
      paragraph: "Lorem ipsum dolor sit amet,",
      image:
        "https://www.logolynx.com/images/logolynx/2f/2f953d06cd1cae7298c1bf47c43fa195.jpeg",

      link: "someling",
    },
    {
      header: "loremIpsum",
      paragraph: "Lorem ipsum dolor sit amet,",
      image:
        "https://www.logolynx.com/images/logolynx/56/56a039f2654884a52aec89df3384a7d8.png",

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
