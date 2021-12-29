import * as actions from "./actions";
import { Dispatch } from "redux";
import { UserState } from "./reducer";

export const loginThunk = (email: string, userState: UserState) => async (dispatch: Dispatch) => {
  try {
    dispatch(actions.loginRequest());
    // api call

    dispatch(actions.loginSuccess(email, Date.now()));

    setInterval(() => {
      if (Date.now() - userState.loggedInAt >= 300000 ){
        dispatch(actions.logoutUser());
      }
    }, 60000);

  } catch (e) {
    dispatch(actions.loginFailed(e as Error));
  }
};

export const logoutThunk = () => (dispatch: Dispatch) => {
  dispatch(actions.logoutUser());
};
