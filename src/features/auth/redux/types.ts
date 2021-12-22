export interface UserState {
  loggedAt: Date | null,
  isLogin: boolean,
  errors: IError[] | null
}

export interface IError{
  field: string,
  message: string,
}

export enum UserActionTypes {
  LOGIN = "LOGIN",
  LOGIN_ERROR = "LOGIN_ERROR",
  LOGOUT = "LOGOUT",
  LOGIN_EXPIRED = "LOGIN_EXPIRED",
}

interface LoginUserAction {
  type: UserActionTypes.LOGIN;
  payload: {
    loggedAt: Date | null,
    errors: IError[] | null
  };
}

interface LoginExpiredUserAction {
  type: UserActionTypes.LOGIN_EXPIRED;
  payload: { errors: IError[] | null };
}

interface LoginErrorUserAction {
  type: UserActionTypes.LOGIN_ERROR;
  payload: { errors: IError[] };
}

interface LogoutUserAction {
  type: UserActionTypes.LOGOUT;
  payload: { errors: IError[] | null };
}

export type UserAction = LoginUserAction | LogoutUserAction | LoginErrorUserAction | LoginExpiredUserAction
