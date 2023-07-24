import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import styled, { css } from "styled-components";
import { auth } from "../../../src/firebase";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const SignUp = (event: any) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
      })
      .catch((error) => console.log(error));
  };
  return (
    <SignInContainer>
      <form onSubmit={SignUp}>
        <h1>Sign Up</h1>
        <Input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter Email"
        />
        <Input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          name=""
          placeholder="Enter Password"
          id=""
        />
        <Button type="submit">SignUp</Button>
      </form>
    </SignInContainer>
  );
}

const SignInContainer = styled.div``;
const Input = styled.input``;
const Button = styled.button``;
