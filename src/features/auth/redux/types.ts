export interface UserState {
    // errors: string[],
    isLogin: boolean
}

export enum UserActionTypes {
    LOGIN = 'LOGIN',
    LOGIN_ERROR = 'LOGIN_ERROR',
    LOGOUT = 'LOGOUT',
}

interface LoginUserAction {
    type: UserActionTypes.LOGIN;
}

interface LoginErrorUserAction {
    type: UserActionTypes.LOGIN_ERROR;
    // payload: {error: string}
}

interface LogoutUserAction {
    type: UserActionTypes.LOGOUT;
}

export type UserAction = LoginUserAction | LogoutUserAction | LoginErrorUserAction