import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { auth } from '../firebase';

export default function AuthDetails() {
  const [authUser, setAuthUser] = useState<User | null>(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, user => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  });

  const useSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch(error => {});
  };
  return (
    <>
      <div>{authUser ? <p>{`Signed In as ${authUser.email}`}</p> : <p>Signed Out</p>}</div>
      <button onClick={useSignOut}>Sign Out</button>
    </>
  );
}
