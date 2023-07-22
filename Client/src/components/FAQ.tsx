import React, { useState } from "react";
import styled from "styled-components";
import { FaGift, FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function FAQ() {
  const [showPara, setShowPara] = useState<boolean>(false);

  return (
    <FaqContainer>
      <WithoutParagraph>
        <HeaderWrapper>
          <IconWrapper>
            <FaGift />
          </IconWrapper>
          <Header>Is there a free trial available?</Header>
        </HeaderWrapper>
        <FaIconWrapper onClick={() => setShowPara(!showPara)}>
          {showPara ? <FaChevronUp /> : <FaChevronDown />}
        </FaIconWrapper>
      </WithoutParagraph>
      {showPara && (
        <Paragraph>
          Yes, you can try us for free for 30 days. If you want, we will provide
          you with a free 30 minutes onboarding call to get you up and running.
        </Paragraph>
      )}
    </FaqContainer>
  );
}

const FaqContainer = styled.div`
  padding: 15px 30px 0px;
  @media (max-width: 280px) {
    padding: 15px;
  }
`;

const WithoutParagraph = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

const IconWrapper = styled.div`
  font-size: 18px;
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
  height: 35px;
  margin-right: 10px;
  margin-top: 8px;
  @media (max-width: 280px) {
    font-size: 15px;
    height: 31px;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Header = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
  @media (max-width: 280px) {
    font-size: 18px;
  }
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: #333;
  margin-left: 40px;
  margin-right: 40px;
  @media (max-width: 280px) {
    font-size: 12px;
  }
  @media (min-width: 768px) {
    padding-right: 15px;
    width: 70%;
    font-size: 15px;
  }
`;

const FaIconWrapper = styled.div`
  font-size: 18px;
  color: #777;
  transition: color 0.2s ease;
  padding-top: 4px;

  &:hover {
    color: red;
  }
  @media (max-width: 280px) {
    font-size: 15px;
    padding-top: 5px;
  }
`;
