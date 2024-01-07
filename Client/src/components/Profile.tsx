import React from 'react';
import styled from 'styled-components';
import { useUserContext } from './UserContext';

const ProfileContainer = styled.div`
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.4);
  width: 90%;
  margin: auto;
  margin-top: 80px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  background-color: rgb(173, 173, 150);

  @media (min-width: 768px) {
    width: 40%;
  }
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  @media (min-width: 768px) {
    width: 60%;
  }
`;

const InfoHeader = styled.h2`
  @media (max-width: 380px) {
    top: -3%;
    font-size: 18px;
  }
  color: rgb(113, 114, 116);
  position: absolute;
  top: -4%;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 200;
  font-size: 25px;
  @media (min-width: 768px) {
    font-size: 33px;
  }
  @media (min-width: 1198px) {
    top: -12%;
    font-size: 50px;
  }
`;
const InfoContainer = styled.div`
  padding: 0 20px;
  position: relative;

  width: 85%;
  background-color: rgb(247, 244, 235);
  height: 300px;

  @media (min-width: 768px) {
    margin-left: 15%;
  }
`;

const InfoItem = styled.div`
  margin-top: 40px;
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

const ProfileName = styled.h2`
  text-align: center;
  font-size: 24px;
  color: #fff;
  margin: 10px 0;

  @media (min-width: 768px) {
    font-size: 30px;
  }

  @media (min-width: 1198px) {
    font-size: 50px;
    font-weight: 500;
  }
`;

const ProfileEmail = styled.p`
  font-size: 16px;
  text-align: center;
  color: #fff;

  @media (min-width: 768px) {
    font-size: 20px;
  }

  @media (min-width: 1198px) {
    font-size: 30px;
    font-weight: 300;
  }
`;

export default function Profile() {
  const { currentUser } = useUserContext();
  return (
    <ProfileContainer>
      <ProfileHeader>
        <ProfileName>{currentUser.userName}</ProfileName>
        <ProfileEmail>{currentUser.userEmailAddress}</ProfileEmail>
      </ProfileHeader>
      <ProfileInfo>
        <InfoContainer>
          <InfoHeader>User Profile</InfoHeader>
          <InfoItem>
            <InfoLabel>Email:</InfoLabel>
            <InfoValue>{currentUser.userEmailAddress}</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Phone:</InfoLabel>
            <InfoValue>{currentUser.userPhoneNumber}</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>DOB:</InfoLabel>
            <InfoValue>{currentUser.userDob}</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Shipping Address: (Hard coded)</InfoLabel>
            <InfoValue>1234 street, Zaandam, NL</InfoValue>
          </InfoItem>
        </InfoContainer>
      </ProfileInfo>
    </ProfileContainer>
  );
}
