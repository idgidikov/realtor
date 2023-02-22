import { Outlet, Navigate } from "react-router-dom";
import { UseAuthStatus }  from "../hooks/UseAuthStatus";
export default function PrivateRoute() {
  const { loggedIn, checkingStatus } = UseAuthStatus();
  if (checkingStatus) {
    return <h3>loading</h3>
  }
  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
}