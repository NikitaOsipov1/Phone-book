import { UserAction, UserActionTypes, UserState } from "./types";

const initialState: UserState = {
  loggedAt: null,
  isLogin: false,
  errors: null
};

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.LOGIN:
      return {
        ...state,
        loggedAt: action.payload.loggedAt,
        isLogin: true,
        errors: action.payload.errors
      };
    case UserActionTypes.LOGIN_EXPIRED:
      return {
        ...state,
        loggedAt: null,
        isLogin: false,
        errors: action.payload.errors
      };
    case UserActionTypes.LOGIN_ERROR:
      return {
        ...state,
        isLogin: false,
        loggedAt: null,
        errors: [...action.payload.errors]
      };
    case UserActionTypes.LOGOUT:
      return {
        ...state,
        isLogin: false,
        loggedAt: null,
        errors: action.payload.errors
      };
    default:
      return state;
  }
};
