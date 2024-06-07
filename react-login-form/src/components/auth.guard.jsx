import { Navigate } from "react-router-dom";
import { getAuth } from "../components/auth";

// eslint-disable-next-line react/prop-types
export const AuthGuard = ({ children, redirectTo }) => {
  let isAuthenticated = getAuth();
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
};

export default AuthGuard;
