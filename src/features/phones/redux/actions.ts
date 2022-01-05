import {EditablePhone, PhoneState} from "./reducer";
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

export const addPhoneRequest = (phone: EditablePhone) => ({
  type: PhoneActionTypes.PHONE_ADD_REQUEST,
  payload: { contact: phone }
});

export const addPhoneSuccess = (phone: PhoneState) => ({
  type: PhoneActionTypes.PHONE_ADD_SUCCESS,
  payload: { contact: phone }
});

export const addPhoneError = (e: Error) => ({
  type: PhoneActionTypes.PHONE_ADD_ERROR,
  payload: { error: e }
});

export const editPhoneRequest = (contact: EditablePhone, id: string) => ({
  type: PhoneActionTypes.PHONE_EDIT_REQUEST,
  payload: { contact: contact, id: id }
});

export const editPhoneSuccess = (phone: PhoneState) => ({
  type: PhoneActionTypes.PHONE_EDIT_SUCCESS,
  payload: { contact: phone }
});

export const editPhoneError = (e: Error) => ({
  type: PhoneActionTypes.PHONE_EDIT_ERROR,
  payload: { error: e }
});

export const deletePhoneRequest = (id: string) => ({
  type: PhoneActionTypes.PHONE_DELETE_REQUEST,
  payload: { id: id }
});

export const deletePhoneSuccess = (id: string) => ({
  type: PhoneActionTypes.PHONE_DELETE_SUCCESS,
  payload: { id: id }
});

export const deletePhoneError = (e: Error) => ({
  type: PhoneActionTypes.PHONE_DELETE_ERROR,
  payload: { error: e }
});

export type PhoneActions = ReturnType<typeof addPhoneRequest
  | typeof addPhoneSuccess
  | typeof addPhoneError
  | typeof editPhoneRequest
  | typeof editPhoneSuccess
  | typeof editPhoneError
  | typeof deletePhoneRequest
  | typeof deletePhoneSuccess
  | typeof deletePhoneError
  | typeof getPhonesRequest
  | typeof getPhonesSuccess
  | typeof getPhonesError>
