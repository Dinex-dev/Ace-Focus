import React from "react";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { useAuthState } from "react-firebase-hooks/auth";

import { firebaseConfig } from "./firebaseconfig";
const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const firestore = app.firestore();
const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <button className="sign-in" onClick={signInWithGoogle}>
      Sign in with Google
    </button>
  );
};

const SignOut = () => {
  return (
    auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
};
export { auth, firestore, SignIn, SignOut };

// export const User_Data = async () => {
//   let data = await firestore.collection("User").get();
//   return data.docs.map((doc) => doc.data());
// };
