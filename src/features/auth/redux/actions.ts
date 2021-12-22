import { UserAction, UserActionTypes } from "./types";
import { Dispatch } from "redux";

export const loginUser = () => {
  return (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: UserActionTypes.LOGIN,
      payload: {
        loggedAt: new Date()
      }
    });

    setTimeout(() => {
      dispatch({
        type: UserActionTypes.LOGIN_EXPIRED
      });
    }, 120000);

  };
};

export const logoutUser = () => {
  return (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: UserActionTypes.LOGOUT
    });
  };
};
