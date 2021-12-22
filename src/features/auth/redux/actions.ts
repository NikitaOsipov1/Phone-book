import { UserAction, UserActionTypes } from "./types";
import { Dispatch } from "redux";

export const loginUser = (email: string, password: string) => {
  console.log(email, password);
  return (dispatch: Dispatch<UserAction>) => {
    if (email !== "test@gmail.com") {
      return dispatch({
        type: UserActionTypes.LOGIN_ERROR,
        payload: {
          errors: [{
            field: "email",
            message: "User with such email doesn`t exist."
          }]
        }
      });
    }

    if (password !== "Qwerty12") {
      return dispatch({
        type: UserActionTypes.LOGIN_ERROR,
        payload: {
          errors: [{
            field: "password",
            message: "Password is incorrect."
          }]
        }
      });
    }

    dispatch({
      type: UserActionTypes.LOGIN,
      payload: {
        loggedAt: new Date(),
        errors: null
      }
    });

    setTimeout(() => {
      dispatch({
        type: UserActionTypes.LOGIN_EXPIRED,
        payload: { errors: null }
      });
    }, 120000);

  };
};

export const logoutUser = () => {
  return (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: UserActionTypes.LOGOUT,
      payload: { errors: null }
    });
  };
};
