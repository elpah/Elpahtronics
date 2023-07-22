import React from "react";
import TopBar from "../components/TopBar";
import styled from "styled-components";
import ContactCard from "../components/ContactCard";
import {
  FaCommentDots,
  FaUsers,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import FAQ from "../components/FAQ";

const ContactPageContainer = styled.div`
  // display: flex;
  // flex-direction: column;
`;
const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 350px;
  width: 100%;
  background: url("https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80")
    no-repeat;
  background-size: cover;
  @media (min-width: 768px) {
    height: 500px;
  }
  @media (min-width: 1198px) {
    height: 600px;
  }
`;

const Header = styled.h2`
  font-size: 30px;
  font-weight: 800;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 390px) {
    font-size: 20px;
  }
  @media (max-width: 250px) {
    font-size: 18px;
  }

  @media (min-width: 768px) {
    font-size: 50px;
  }
  @media (min-width: 1198px) {
    font-size: 65px;
  }
`;

const Para = styled.p`
  font-size: 18px;
  color: rgb(221, 187, 69);
  background-color: rgba(68, 64, 56, 0.6);

  @media (max-width: 390px) {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    font-size: 30px;
  }
  @media (min-width: 1198px) {
    font-size: 40px;
  }
`;
const ContactCardContainer = styled.div`
  width: 90%;
  max-width: 1400px;
  display: grid;
  margin: 100px auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 8px;
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
const FaqFormContainer = styled.div`
  width: 90%;
  max-width: 1400px;
  border: 2px solid black;
  margin: 20px auto;
  display: grid;
  @media (min-width: 1198px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 8px;
  }
`;
const FaqContainer = styled.div``;
const FormContainer = styled.div`
  @media (max-width: 1198px) {
    margin-top: 30px;
  }
`;
const FaqFormHeader = styled.h2`
  font-size: 25px;
  text-align: center;
  @media (max-width: 280px) {
    font-size: 18px;
  }
`;
const Faq = styled.div``;
const Form = styled.div``;

export default function Contact() {
  const contacts = [
    {
      title: "Chat to sales",
      paragraph: "Speak to our friendly team",
      contact: "sales@elpahtronics.com",
      icon: <FaCommentDots />,
    },
    {
      title: "Chat to support",
      paragraph: "Speak to our friendly team",
      contact: "support@elpahtronics.com",
      icon: <FaUsers />,
    },
    {
      title: "Visit us",
      paragraph: "Speak to our friendly team",
      contact: "View location Google Maps",
      icon: <FaMapMarkerAlt />,
    },
    {
      title: "Call us",
      paragraph: "Mon- Fri from 8am-10pm",
      contact: "+1-928-940-294ab",
      icon: <FaPhoneAlt />,
    },
  ];
  return (
    <ContactPageContainer>
      <HeaderDiv>
        <Header>Contact Our Friendly Team</Header>
        <Para>Let us know how we can help you...</Para>
      </HeaderDiv>
      <ContactCardContainer>
        {contacts.map((contact, index) => (
          <ContactCard
            key={index}
            title={contact.title}
            paragraph={contact.paragraph}
            contact={contact.contact}
            icon={contact.icon}
          />
        ))}
      </ContactCardContainer>
      <FaqFormContainer>
        <FaqContainer>
          <FaqFormHeader>Frequently Asked Questions</FaqFormHeader>
          <Faq>
            <FAQ />
            <FAQ />
            <FAQ />
          </Faq>
        </FaqContainer>
        <FormContainer>
          <FaqFormHeader> Send Us A Message</FaqFormHeader>
          <Form></Form>
        </FormContainer>
      </FaqFormContainer>
    </ContactPageContainer>
  );
}
