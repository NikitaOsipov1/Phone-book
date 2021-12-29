import * as actions from "./actions";
import { Dispatch } from "redux";

export const getPhonesThunk = () => async (dispatch: Dispatch) => {
  try {
    dispatch(actions.getPhonesRequest());

    const response = await fetch("./phones.json");

    const data = await response.json();

    dispatch(actions.getPhonesSuccess(data));

  } catch (e) {
    dispatch(actions.getPhonesError(e as Error));
  }
};
