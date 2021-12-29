import * as UserActionTypes from "./types";

export const loginRequest = () => ({
  type: UserActionTypes.LOGIN_REQUEST
});

export const loginSuccess = (email: string, loggedInAt: number) => ({
  type: UserActionTypes.LOGIN_SUCCESS,
  payload: { email: email, loggedInAt: loggedInAt }
});

export const loginFailed = (error: Error) => ({
  type: UserActionTypes.LOGIN_ERROR,
  payload: { error: error }
});

export const logoutUser = () => ({
  type: UserActionTypes.LOGOUT
});

export type UserActions = ReturnType<typeof loginRequest
  | typeof loginSuccess
  | typeof loginFailed
  | typeof logoutUser>
