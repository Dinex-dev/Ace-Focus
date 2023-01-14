import React, { FunctionComponent, useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { AuthContext } from "./firebase/Auth";

interface PrivatRouteProps {
  Component: React.ElementType;
  [rest: string]: any;
}

const PrivatRoute: FunctionComponent<PrivatRouteProps> = ({
  Component,
  ...rest
}) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      element={!!currentUser ? <Component /> : <Navigate to="/" />}
    />
  );
};

export default PrivatRoute;
