import React from 'react';
import {Navigate, Outlet } from 'react-router-dom';
import store from '../store/index'

export const PublicRoute = () => {
    return !store.getState().user.isLogin
        ? <Outlet />
        : <Navigate to="/" />;
}
