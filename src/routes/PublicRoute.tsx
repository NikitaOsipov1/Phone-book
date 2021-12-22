import React from 'react';
import {Navigate, Outlet } from 'react-router-dom';
import { useSelector } from "react-redux";
import { RootState } from "../store/types";

export const PublicRoute = () => {
    const userState = useSelector((state: RootState) => state.user);
    return !userState.isLogin
        ? <Outlet />
        : <Navigate to="/" />;
}
