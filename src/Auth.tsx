import React, { FunctionComponent, useEffect, useState } from "react";
import app from "./base";
import { Auth, getAuth } from "firebase/auth";

export const AuthContext = React.createContext({ currentUser: null });

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: FunctionComponent<AuthProviderProps> = ({
  children,
}) => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  useEffect(() => {
    getAuth(app).onAuthStateChanged(setCurrentUser);
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
