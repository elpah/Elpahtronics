import React from 'react';
import styled from 'styled-components';
import { BsTelephone } from 'react-icons/bs';

const BarContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  background-color: green;
  color: white;
  height: 30px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: auto;
`;

const Paragraph = styled.p`
  text-align: center;
  margin: 0;
  padding: 3px;
  font-size: 15px;
`;

export default function TopBar() {
  return (
    <BarContainer>
      {/* <Bar>
        <Paragraph>
          <BsTelephone />
          +233203829421
        </Paragraph>
        <Paragraph> 30% Discount | Shop Now</Paragraph>
        <Paragraph>Lorem Ipsum</Paragraph>
      </Bar> */}
    </BarContainer>
  );
}
