import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';

const PaymentFailedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px; /* Add some padding to the top */
`;

const FailedImageContainer = styled.div`
  margin-top: -250px;
`;
const Image = styled.img`
  width: 50px;
  height: 50px;
`;

const FailedHeader = styled.h2`
  font-size: 24px;
  margin-top: 10px; /* Adjust the margin */
`;

const Paragraph = styled.p`
  font-size: 18px;
  margin-top: 10px;
  text-align: center;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default function PaymentFailed() {
  return (
    <>
      <PaymentFailedContainer>
        <FailedImageContainer>
          <Image src="https://tse4.mm.bing.net/th?id=OIP.46zCjYiQyImgmpDhUo7qIQHaHa&pid=Api&P=0&h=180" alt="" />
        </FailedImageContainer>
        <FailedHeader>Payment Failed</FailedHeader>
        <Paragraph>Error processing transaction. Please try again with a different payment method.</Paragraph>
        <Button>Try Again</Button>
      </PaymentFailedContainer>
      <Footer />
    </>
  );
}
