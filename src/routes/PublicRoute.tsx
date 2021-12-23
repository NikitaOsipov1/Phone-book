import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../features/auth/hooks/useAuth";

export const PublicRoute = () => {
  const { isLoggedIn } = useAuth();
  return !isLoggedIn
    ? <Outlet />
    : <Navigate to="/" />;
};
