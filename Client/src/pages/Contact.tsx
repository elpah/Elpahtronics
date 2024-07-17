import React, { useState } from 'react';
import styled from 'styled-components';
import {
  FaCommentDots,
  FaUsers,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGift,
  FaQuestionCircle,
  FaUserFriends,
  FaClock,
  FaPhoneSquareAlt,
} from 'react-icons/fa';
import ContactCard from '../components/ContactCard.tsx';
import FAQ from '../components/FAQ.tsx';
import Footer from '../components/Footer.tsx';
import MessageForm from '../components/MessageForm.tsx';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

const ContactPageContainer = styled.div`
  width: 100%;
`;

const Header = styled.h2`
  font-size: 25px;
  font-weight: 400;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 250px) {
    font-size: 18px;
  }

  @media (min-width: 250px) and (max-width: 450px) {
    margin-top: -50px;
  }

  @media (min-width: 450px) and (max-width: 768px) {
    font-size: 35px;
    margin-top: -50px;
  }

  @media (min-width: 768px) {
    font-size: 50px;
  }

  @media (min-width: 1198px) {
    font-size: 65px;
    margin-top: 250px;
  }
`;

const Para = styled.p`
  font-size: 18px;
  color: rgb(221, 187, 69);
  background-color: rgba(68, 64, 56, 0.6);

  @media (min-width: 250px) and (max-width: 450px) {
    font-size: 18px;
  }

  @media (min-width: 450px) and (max-width: 768px) {
    font-size: 25px;
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
  margin: 20px auto;
  display: grid;

  @media (min-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 50px;
  }
`;
const FaqContainer = styled.div``;
const FormContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 80px;
  @media (min-width: 768px) {
    margin-top: 100px;
  }
  @media (min-width: 1198px) {
    margin-top: 0;
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
const FooterContainer = styled.div`
  max-width: 1700px;
  margin: auto;
`;
const HeaderContent = styled.div`
  margin: 200px auto 100px;
  text-align: center;
  max-width: 800px;
  @media (min-width: 1198px) {
    margin-bottom: 200px;
  }
`;
const Container = styled.div`
  padding-bottom: 50px;
  padding-top: 2px;
  margin-top: 100px;
  background-color: #fff;
  z-index: 1;
  @media (min-width: 768px) {
    padding-top: 2px;
  }
  @media (min-width: 1198px) {
    padding-top: 5px;
    margin-top: 250px;
  }
`;

const FixedImage = styled.div`
  position: fixed;
  top: 80px;
  z-index: -1;
  height: 250px;
  width: 100%;
  background: url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80')
    no-repeat;
  background-size: cover;
  @media (min-width: 768px) {
    top: 80px;
    height: 500px;
    margin: auto;
  }
  @media (min-width: 1198px) {
    height: 520px;
    top: 110px;
  }
`;

export default function Contact() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleFAQClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const mutation = useMutation(formData =>
    fetch('https://elpahtronics-backend.vercel.app/api/sendEmail/feedback-email', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (response.ok) {
          toast.success('Feedback submitted successfully.');
        }
      })
      .catch(() => {
        toast.error('Error submitting feedback.');
      }),
  );

  const handleSubmit = (formData: any) => {
    mutation.mutate(formData);
  };

  const contacts = [
    {
      title: 'Chat to sales',
      paragraph: 'Speak to our friendly team',
      contact: 'sales@elpahtronics.com',
      icon: <FaCommentDots />,
    },
    {
      title: 'Chat to support',
      paragraph: 'Speak to our friendly team',
      contact: 'support@elpahtronics.com',
      icon: <FaUsers />,
    },
    {
      title: 'Visit us',
      paragraph: 'Speak to our friendly team',
      contact: 'View location Google Maps',
      icon: <FaMapMarkerAlt />,
    },
    {
      title: 'Call us',
      paragraph: 'Mon- Fri from 8am-10pm',
      contact: '+1-928-940-294ab',
      icon: <FaPhoneAlt />,
    },
  ];
  const Faquestions = [
    {
      title: 'Can I return items if it does not match the description?',
      paragraph:
        'Yes, yAbsolutely! If your new finds dont bring you joy, you can return them hassle-free within 30 days.',
      icon: <FaGift />,
    },
    {
      title: 'What happens if I accidentally order the wrong item or color?',
      paragraph:
        'No worries! We get it; mistakes happen. You can easily exchange the item for the right size or color within our return policy. Feel free to reach out to our support team, and we will assist you in making your shopping experience just right!',
      icon: <FaQuestionCircle />,
    },
    {
      title: 'What payment methods do you accept?',
      paragraph:
        'We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also support payments through PayPal.',
      icon: <FaUserFriends />,
    },
    {
      title: 'Is my data safe and secure?',
      paragraph:
        'Yes, we take data security very seriously. We use industry-standard encryption and security measures to protect your data from unauthorized access.',
      icon: <FaClock />,
    },
    {
      title: 'Do you offer customer support?',
      paragraph:
        'Absolutely! We have a dedicated customer support team available 24/7 to assist you with any questions or issues you may have.',
      icon: <FaPhoneSquareAlt />,
    },
  ];
  return (
    <ContactPageContainer>
      <FixedImage></FixedImage>
      <HeaderContent>
        <Header>Contact Our Friendly Team</Header>
        <Para>Let us know how we can help you...</Para>
      </HeaderContent>
      <Container>
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
              {Faquestions.map((faq, index) => (
                <FAQ
                  key={index}
                  title={faq.title}
                  paragraph={faq.paragraph}
                  icon={faq.icon}
                  isOpen={index === openIndex}
                  onClick={() => handleFAQClick(index)}
                  index={index}
                  currentIndex={openIndex!}
                />
              ))}
            </Faq>
          </FaqContainer>
          <FormContainer>
            <FaqFormHeader> Send Us A Message</FaqFormHeader>
            <Form>
              <MessageForm handleSubmit={handleSubmit} />
            </Form>
          </FormContainer>
        </FaqFormContainer>
      </Container>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </ContactPageContainer>
  );
}
