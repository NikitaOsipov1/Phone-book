import { UserAction, UserActionTypes, UserState } from "./types";

const initialState: UserState = {
  loggedAt: null,
  isLogin: false
};

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.LOGIN:
      return {
        ...state,
        loggedAt: action.payload.loggedAt,
        isLogin: true
      };
    case UserActionTypes.LOGIN_EXPIRED:
      return {
        ...state,
        loggedAt: null,
        isLogin: false
      };
    case UserActionTypes.LOGOUT:
      return {
        ...state,
        isLogin: false,
        loggedAt: null
      };
    default:
      return state;
  }
};
