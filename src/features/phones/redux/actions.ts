import { PhoneState } from "./reducer";
import * as PhoneActionTypes from "./types";

export const getPhonesRequest = () => ({
  type: PhoneActionTypes.PHONES_GET_REQUEST
});

export const getPhonesSuccess = (phones: Array<PhoneState>) => ({
  type: PhoneActionTypes.PHONES_GET_SUCCESS,
  payload: { phones: phones }
});

export const getPhonesError = (e: Error) => ({
  type: PhoneActionTypes.PHONES_GET_ERROR,
  payload: { error: e }
});

export const addPhone = (phone: PhoneState) => ({
  type: PhoneActionTypes.PHONE_ADD_REQUEST,
  payload: phone
});

export const editPhone = () => ({
  type: PhoneActionTypes.PHONE_EDIT_REQUEST
});

export const deletePhoneRequest = () => ({
  type: PhoneActionTypes.PHONE_DELETE_REQUEST
});

export type PhoneActions = ReturnType<typeof addPhone
  | typeof editPhone
  | typeof deletePhoneRequest
  | typeof getPhonesRequest
  | typeof getPhonesSuccess
  | typeof getPhonesError>
