import React from "react";
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";
import AuthDetails from "../components/AuthDetails";

export default function Admin() {
  return (
    <>
      <SignIn />
      <SignUp />
      <AuthDetails />
    </>
  );
}
