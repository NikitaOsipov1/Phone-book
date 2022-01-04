import * as actions from "./actions";
import { Dispatch } from "redux";
import { v4 as uuidv4 } from "uuid";
import { EditablePhone, PhoneState } from "./reducer";

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

export const addPhoneThunk = (contact: EditablePhone) => (dispatch: Dispatch) => {
  try {
    dispatch(actions.addPhoneRequest());

    const newContact:PhoneState = {
      ...contact,
      id: uuidv4(),
      registered: new Date().toISOString()
    }

    dispatch(actions.addPhoneSuccess(newContact));

  } catch (e) {
    dispatch(actions.addPhoneError(e as Error));
  }
};

export const editPhoneThunk = (contact: EditablePhone, id: string) => (dispatch: Dispatch) => {
  try {
    dispatch(actions.editPhoneRequest());

    const updateContact:PhoneState = {
      ...contact,
      id: id,
    }

    dispatch(actions.editPhoneSuccess(updateContact));

  } catch (e) {
    dispatch(actions.editPhoneError(e as Error));
  }
};


export const deletePhoneThunk = (id: string) => (dispatch: Dispatch) => {
  try {
    dispatch(actions.deletePhoneRequest());

    dispatch(actions.deletePhoneSuccess(id));

  } catch (e) {
    dispatch(actions.deletePhoneError(e as Error));
  }
};
