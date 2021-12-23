import * as actions from './actions';
import { Dispatch } from "redux";


export const loginThunk = (email: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(actions.loginRequest());
    // api call

    if (email) {
      dispatch(actions.loginSuccess(email));
    } else {
      dispatch(actions.loginFailed(new Error('')));
    }

  } catch (e) {
    dispatch(actions.loginFailed(e as Error));
  }
};

export const logoutThunk = () => (dispatch: Dispatch) => {
  dispatch(actions.logoutUser());
};
