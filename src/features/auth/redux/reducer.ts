import * as UserActionTypes from "./types";
import type { Reducer } from "redux";
import type { UserActions } from "./actions";

const initialState = {
  email: "",
  isLoading: false,
  isLoggedIn: false,
  error: null as null | Error
};

export type UserState = typeof initialState;

export const userReducer: Reducer<UserState, UserActions> = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        email: "",
        isLoading: true,
        error: null
      };
    case UserActionTypes.LOGIN_SUCCESS:
      const { email } = action.payload;
      return {
        ...state,
        email,
        isLoggedIn: true,
        isLoading: false
      };
    case UserActionTypes.LOGIN_ERROR:
      const { error } = action.payload;
      return {
        ...state,
        error,
        isLoggedIn: false,
        isLoading: false
      };
    case UserActionTypes.LOGOUT:
      return {
        ...state,
        email: "",
        isLoggedIn: false
      };
    default:
      return state;
  }
};
