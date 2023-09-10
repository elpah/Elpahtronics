import React from 'react';
import styled from 'styled-components';

export default function Profile() {
  return (
    <ProfileContainer>
      <ProfileHeader>
        <ProfileImage
          src="https://tse2.mm.bing.net/th?id=OIP.oEx_SzFmimIVw2nSZmp-xwHaEL&pid=Api&P=0&h=180"
          alt="ProfileImgPlaceHolder"
        />
        <ProfileName>Elpachris Obeng</ProfileName>
      </ProfileHeader>
      <ProfileInfo>
        <InfoItem>
          <InfoLabel>Email:</InfoLabel>
          <InfoValue>johndoe@example.com</InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoLabel>Phone:</InfoLabel>
          <InfoValue>(123) 456-7890</InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoLabel>Shipping Address:</InfoLabel>
          <InfoValue>1234 Elm Street, New York, USA</InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoLabel>Payment Methods:</InfoLabel>
          <InfoValue>
            <PaymentMethod>
              <PaymentIcon src="credit-card-icon.png" alt="Credit Card" />
              **** **** **** 1234
            </PaymentMethod>
            <PaymentMethod>
              <PaymentIcon src="paypal-icon.png" alt="PayPal" />
              PayPal
            </PaymentMethod>
          </InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoLabel>Order History:</InfoLabel>
          <OrderHistory>
            <OrderItem>
              <OrderId>Order #12345</OrderId>
              <OrderDate>Order Date: 27-10-2023</OrderDate>
              <OrderStatus>Order Status: Shipped</OrderStatus>
              <OrderTotal>Total Price: $200</OrderTotal>
            </OrderItem>
            {/* Add more order history items here */}
          </OrderHistory>
        </InfoItem>
      </ProfileInfo>
    </ProfileContainer>
  );
}

const ProfileContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
  min-height: 100vh; /* Set the min-height to 100% of the viewport height */

  @media (min-width: 768px) {
    max-width: 600px;
  }
`;

const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #fff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
`;

const ProfileName = styled.h2`
  font-size: 24px;
  margin: 10px 0;
`;

const ProfileUsername = styled.p`
  font-size: 16px;
  color: #666;
`;

const ProfileInfo = styled.div`
  text-align: left;
`;

const InfoItem = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const InfoLabel = styled.div`
  flex: 1;
  font-weight: bold;
  color: #333;
`;

const InfoValue = styled.div`
  flex: 2;
  color: #666;

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const PaymentMethod = styled.div`
  display: flex;
  align-items: center;
`;

const PaymentIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const OrderHistory = styled.div`
  margin-top: 10px;
`;

const OrderItem = styled.div`
  margin-bottom: 10px;
`;

const OrderId = styled.p`
  font-weight: bold;
`;

const OrderDate = styled.p`
  color: #666;
`;

const OrderStatus = styled.p`
  color: #666;
`;

const OrderTotal = styled.p`
  font-weight: bold;
`;
