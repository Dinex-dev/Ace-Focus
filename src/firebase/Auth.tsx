import React, { FunctionComponent, useEffect, useState } from "react";
import app from "./base";
import { Auth, connectAuthEmulator, getAuth } from "firebase/auth";

export const AuthContext = React.createContext({ currentUser: null });

interface AuthProviderProps {
  children: React.ReactNode;
}

export const auth = getAuth(app);
// connectAuthEmulator(auth, "http://localhost:9099");

export const AuthProvider: FunctionComponent<AuthProviderProps> = ({
  children,
}) => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  useEffect(() => {
    auth.onAuthStateChanged(setCurrentUser);
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
