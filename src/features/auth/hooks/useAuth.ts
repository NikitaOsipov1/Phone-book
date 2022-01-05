import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store/types";
import { useCallback } from "react";
import {checkLoginExpiration, loginRequest, logoutUser} from "../redux/actions";

export const useAuth = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state: RootState) => state.user);

  const onLogin = useCallback((email: string, _password: string) => {
    dispatch(loginRequest(email));
  }, [dispatch]);

  const onLogout = useCallback(() => {
    dispatch(logoutUser());
  }, [dispatch]);

  const onCheckLoginExpiration = useCallback(() => {
    dispatch(checkLoginExpiration());
  }, [dispatch]);

  return {
    ...userState,
    onLogin,
    onLogout,
    onCheckLoginExpiration
  };
};
