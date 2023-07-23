// import React from "react";
// import styled from "styled-components";

// export default function MessageForm() {
//   return (
//     <Form>
//       <NameDiv>
//         <FormInput type="text" name="firstName" placeholder="First Name" />
//         <FormInput type="text" name="lastName" placeholder="Last Name" />
//       </NameDiv>
//       <FormInput type="email" name="email" placeholder="youremail@email.com" />
//       <FormInput type="text" name="subject" placeholder="Subject" />
//       <TextArea name="message" placeholder="Enter Your Message" />
//       <PrivacyLabel>
//         <input type="checkbox" /> You agree to our friendly Privacy Policy
//       </PrivacyLabel>
//       <Button>Send Message</Button>
//     </Form>
//   );
// }

// const Form = styled.form`
//   max-width: 400px;
//   margin: auto;
//   display: flex;
//   flex-direction: column;
// `;

// const FormInput = styled.input`
//   border: none;
//   border-bottom: 1px solid #ccc;
//   padding: 10px;
//   margin-bottom: 15px;
//   font-size: 16px;
//   border-radius: 5px;
//   outline: none;
// `;
// const NameDiv = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   @media (min-width: 1198px) {
//     flex-direction: row;
//   }
// `;
// const TextArea = styled.textarea`
//   padding: 10px;
//   margin-bottom: 15px;
//   font-size: 16px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   resize: vertical;
// `;

// const Button = styled.button`
//   padding: 10px 20px;
//   font-size: 16px;
//   background-color: #007bff;
//   color: #fff;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// `;

// const PrivacyLabel = styled.label`
//   display: flex;
//   align-items: center;
//   font-size: 14px;

//   input {
//     margin-right: 8px;
//   }
// `;

import React from "react";
import styled from "styled-components";

export default function MessageForm() {
  return (
    <Form>
      <NameDiv>
        <FormInput type="text" name="firstName" placeholder="First Name" />
        <FormInput type="text" name="lastName" placeholder="Last Name" />
      </NameDiv>
      <FormInput type="email" name="email" placeholder="youremail@email.com" />
      <FormInput type="text" name="subject" placeholder="Subject" />
      <TextArea name="message" placeholder="Enter Your Message" />
      <PrivacyLabel>
        <input type="checkbox" /> You agree to our friendly Privacy Policy
      </PrivacyLabel>
      <Button>Send Message</Button>
    </Form>
  );
}

const Form = styled.form`
  //   max-width: 400px;
  margin: auto;
  margin-top: -15;
  display: flex;
  flex-direction: column;
`;

const FormInput = styled.input`
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 15px;
  font-size: 16px;
  outline: none; /* Remove the default blue outline on focus */
`;

const NameDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 1198px) {
    flex-direction: row;
    & input {
      width: 48%;
    }
  }
`;

const TextArea = styled.textarea`
  //   border: none;
  //   border-bottom: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 15px;
  font-size: 16px;
  resize: vertical;
  outline: none;
  rows: 5;
  overflow-y: auto;
  font-family: inherit;
  resize: none;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #fff;
  color: #000;

  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const PrivacyLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;

  input {
    margin-right: 8px;
  }
`;
