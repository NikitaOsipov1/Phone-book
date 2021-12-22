export interface UserState {
  loggedAt: Date | null,
  isLogin: boolean
}

export enum UserActionTypes {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
  LOGIN_EXPIRED = "LOGIN_EXPIRED",
}

interface LoginUserAction {
  type: UserActionTypes.LOGIN;
  payload: { loggedAt: Date | null };
}

interface LoginExpiredUserAction {
  type: UserActionTypes.LOGIN_EXPIRED;
}

interface LogoutUserAction {
  type: UserActionTypes.LOGOUT;
}

export type UserAction = LoginUserAction | LogoutUserAction | LoginExpiredUserAction
