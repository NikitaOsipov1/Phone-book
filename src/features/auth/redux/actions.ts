import * as UserActionTypes from "./types";

export const loginRequest = (email: string) => ({
  type: UserActionTypes.LOGIN_REQUEST,
  payload: {
    email
  }
});

export const loginSuccess = (email: string) => ({
  type: UserActionTypes.LOGIN_SUCCESS,
  payload: {
    email
  }
});

export const loginFailed = (error: Error) => ({
  type: UserActionTypes.LOGIN_ERROR,
  payload: {
    error
  }
});

export const logoutUser = () => ({
  type: UserActionTypes.LOGOUT
});

export const checkLoginExpiration = () => ({
  type: UserActionTypes.CHECK_LOGIN_EXPIRATION
});


export type UserActions = ReturnType<typeof loginRequest
  | typeof loginSuccess
  | typeof loginFailed
  | typeof logoutUser
  | typeof checkLoginExpiration>
