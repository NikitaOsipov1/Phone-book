import * as actions from "./actions";
import { Dispatch } from "redux";
import { v4 as uuidv4 } from "uuid";
import { EditablePhone, PhoneState } from "./reducer";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/types";

export const getPhonesThunk = () => async (dispatch: Dispatch) => {
  try {
    dispatch(actions.getPhonesRequest());

    const phones = useSelector((state: RootState) => state.phones);

    console.log(phones);

    if (phones.phones.length <= 0){
      const response = await fetch("./phones.json");
      const data = await response.json();
      dispatch(actions.getPhonesSuccess(data));
    }

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

    console.log(newContact);
    dispatch(actions.addPhoneSuccess(newContact));

  } catch (e) {
    dispatch(actions.addPhoneError(e as Error));
  }
};

export const editPhoneThunk = (contact: EditablePhone) => (dispatch: Dispatch) => {
  try {
    dispatch(actions.editPhoneRequest());

    const newContact:PhoneState = {
      name: {
        first: contact.name.first,
        last: contact.name.last
      },
      id: uuidv4(),
      isActive: contact.isActive,
      registered: new Date().toISOString(),
      age: contact.age,
      company: contact.company,
      email: contact.email,
      phone: contact.phone,
      address: contact.address
    }

    console.log(newContact);
    dispatch(actions.addPhoneSuccess(newContact));

  } catch (e) {
    dispatch(actions.addPhoneError(e as Error));
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
