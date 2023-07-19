import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { productCover } from "../assets/images/exportImages";
import Footer from "../components/Footer";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";
import Product from "../productType";
import ProductModal from "../components/ProductModal";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

interface FilterCategoryProps {
  showCategoryList: boolean;
}

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categoryName, setCategoryName] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [productModalVisibility, setProductModalVisibility] =
    useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showCategoryList, setShowCategoryList] = useState<boolean>(false);
  const [cartArray, setCartArray] = useState<Product[]>([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch(
      "http://localhost:8000/api/products/available"
    );
    const results: Product[] = await response.json();
    setProducts(results);
  };

  const handleCardClick = (product: Product) => {
    setSelectedProduct(product);
    setProductModalVisibility(true);
  };

  const handleAddToCartClick = (productId: string) => {
    const existingProduct = cartArray.find(
      (product) => product.productId === productId
    );

    if (existingProduct) {
      const updatedCartArray = cartArray.map((product) => {
        if (product.productId === productId) {
          return {
            ...product,
            productQuantity: product.productQuantity + quantity,
          };
        }
        return product;
      });
      setCartArray(updatedCartArray);
    } else {
      const selectedProduct = products.find(
        (product) => product.productId === productId
      );
      if (selectedProduct) {
        const updatedProduct = {
          ...selectedProduct,
          productQuantity: quantity,
        };

        setCartArray((prevCartArray) => [...prevCartArray, updatedProduct]);
      }
    }
    setQuantity(1);
  };
  useEffect(() => console.log(cartArray), [cartArray]);

  return (
    <ProductPageContainer>
      <HeaderDiv>
        <HeaderContainer>
          <ChildDivCenter>
            <Header>Get 5% cashback on 200$</Header>
            <Paragraph>
              Shopping is a bit of a relaxing hobby for me, which is sometimes
              troubling for the bank balance.
            </Paragraph>
            <Button
              buttonName="Learn More"
              onClick={() => console.log("redirect to my Github Profile")}
            />
          </ChildDivCenter>
        </HeaderContainer>
      </HeaderDiv>
      <SelectCategoryContainer
        onClick={() => setShowCategoryList(!showCategoryList)}
      >
        <SelectCategory>Filter Category</SelectCategory>
        <Icon>{showCategoryList ? <FiChevronUp /> : <FiChevronDown />}</Icon>
      </SelectCategoryContainer>
      {
        <FilterCategory showCategoryList={showCategoryList}>
          {label.map((labelItem) => (
            <CategoryItem onClick={() => setCategoryName(labelItem.value)}>
              {labelItem.categoryitemName}
            </CategoryItem>
          ))}
        </FilterCategory>
      }
      <ProductHeader>{categoryName}</ProductHeader>
      {productModalVisibility && (
        <ProductModal
          onClose={() => setProductModalVisibility(false)}
          productName={selectedProduct?.productName || ""}
          productId={selectedProduct?.productId}
          productDescription={selectedProduct?.productDescription || ""}
          productPrice={selectedProduct?.productPrice || ""}
          productImage={selectedProduct?.productImage || ""}
          handleIncrement={() => setQuantity(quantity + 1)}
          handleDecrement={() => setQuantity(quantity - 1)}
          quantity={quantity}
          handleAddToCartClick={() =>
            handleAddToCartClick(selectedProduct?.productId || "")
          }
        />
      )}
      <ProductCardContainer>
        {products

          .filter((item) => {
            return categoryName === "All Products"
              ? true
              : item.category
                  .toLowerCase()
                  .includes(categoryName.toLowerCase());
          })
          .map((product) => (
            <ProductCard
              key={product.productId}
              productName={product.productName}
              productDescription={product.productDescription}
              productPrice={product.productPrice}
              productImage={product.productImage}
              handleCardClick={() => handleCardClick(product)}
              handleAddToCartClick={() =>
                handleAddToCartClick(product.productId)
              }
            />
          ))}
      </ProductCardContainer>
      <Footer />
    </ProductPageContainer>
  );
}

const label = [
  { categoryitemName: "All Products", value: "All Products" },
  { categoryitemName: "Furniture", value: "furniture" },
  { categoryitemName: "Bags", value: "bags" },
  { categoryitemName: "Books", value: "books" },
  { categoryitemName: "Tech", value: "tech" },
  { categoryitemName: "Sneakers", value: "sneakers" },
  { categoryitemName: "Travel", value: "travel" },
];

const ProductPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const HeaderDiv = styled.div`
  height: 400px;
  width: 100%;
  background: url(${productCover}) no-repeat;
  background-size: cover;
  @media (min-width: 768px) {
    height: 500px;
    margin: auto;
  }
  @media (min-width: 1198px) {
    height: 700px;
  }
`;
const HeaderContainer = styled.div`
  width: 90%;
  height: 400px;
  max-width: 1400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    height: 500px;
    align-items: flex-end;
  }
  @media (min-width: 1198px) {
    height: 700px;
  }
`;
const ChildDivCenter = styled.div`
  max-width: 90%;
  width: 400px;
  height: 250px;
  padding: 25px 20px 20px;
  border-radius: 35px 0 10px;
  background-color: rgb(200, 78, 64);
  overflow: auto;
  @media (max-width: 384px) {
    padding: 20px 15px 10px;
  }
  @media (min-width: 340px) and (max-width: 390px) {
    padding-top: 40px;
  }
  @media (min-width: 768px) {
    width: 420px;
    height: 350px;
    padding-top: 60px;
    padding-left: 35px;
  }
  @media (min-width: 1198px) {
    width: 650px;
    height: 420px;
    padding-top: 70px;
    padding-left: 60px;
    padding-right: 40px;
  }
`;
const Header = styled.h1`
  color: rgb(229, 214, 110);
  font-size: 25px;
  @media (max-width: 384px) {
    font-size: 20px;
  }
  @media (max-width: 280px) {
    font-size: 18px;
  }
  @media (min-width: 768px) {
    font-size: 30px;
  }
  @media (min-width: 1198px) {
    font-size: 40px;
  }
`;
const Paragraph = styled.p`
  color: rgb(229, 214, 110);
  font-size: 18px;
  margin-top: 20px;
  @media (max-width: 354px) {
    font-size: 15px;
  }
  @media (max-width: 280px) {
    font-size: 13px;
  }
  @media (min-width: 768px) {
    font-size: 20px;
  }
  @media (min-width: 1198px) {
    font-size: 30px;
  }
`;
const ProductCardContainer = styled.div`
  width: 90%;
  max-width: 1400px;
  display: grid;
  grid-gap: 8px;
  margin: auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1198px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
const ProductHeader = styled.h2`
  text-align: center;
  font-size: 25px;
  margin: 3px auto -15px;
  @media (min-width: 768px) {
    margin-bottom: 15px;
  }
`;
const SelectCategory = styled.p`
  font-size: 25px;
`;
const SelectCategoryContainer = styled.div`
  width: 80%;
  margin: 20px auto;
  display: flex;
  @media (min-width: 768px) {
    display: none;
  }
`;
const Icon = styled.div`
  padding-top: 10px;
  padding-left: 2px;
`;
const FilterCategory = styled.div<FilterCategoryProps>`
  border-radius: 10px;
  background-color: rgba(245, 245, 245, 0.6);
  padding: 4px;
  width: 80%;
  max-width: 1400px;
  margin: auto;
  margin-bottom: 20px;
  overflow: hidden;
  transition: max-height 0.3s ease, opacity 0.3s ease, visibility 0.3s ease;

  ${({ showCategoryList }) =>
    showCategoryList
      ? css`
          max-height: 500px;
          opacity: 1;
          visibility: visible;
        `
      : css`
          max-height: 0;
          opacity: 0;
          visibility: hidden;
        `}

  @media (min-width: 768px) {
    padding: 10px;
    margin-top: 30px;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-height: none;
    opacity: 1;
    visibility: visible;
  }
  @media (min-width: 1000px) {
    padding: 10px;
  }
`;
const CategoryItem = styled.p`
  font-size: 18px;
  text-align: center;
  padding: 5px;

  @media (min-width: 768px) {
    display: block;
    border: 2px solid black;
    min-width: 100px;
    border-radius: 15px;
  }
  @media (min-width: 1198px) {
    width: 140px;
    font-size: 22px;
  }
  &:hover {
    background-color: black;
    color: white;
  }
`;
