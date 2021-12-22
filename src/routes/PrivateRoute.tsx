import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../store/types";

export const PrivateRoute = () => {
  const userState = useSelector((state: RootState) => state.user);
  return userState.isLogin
    ? <Outlet />
    : <Navigate to="/login" />;
};
