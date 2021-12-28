import { PhoneState } from "./reducer";
import * as PhoneActionTypes from "./types";
import {
  PHONE_ADD_ERROR,
  PHONE_ADD_SUCCESS,
  PHONE_DELETE_ERROR,
  PHONE_DELETE_SUCCESS,
  PHONE_EDIT_SUCCESS
} from "./types";

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

export const addPhoneRequest = () => ({
  type: PhoneActionTypes.PHONE_ADD_REQUEST,
});

export const addPhoneSuccess = (phone: PhoneState) => ({
  type: PhoneActionTypes.PHONE_ADD_SUCCESS,
  payload: { contact: phone }
});

export const addPhoneError = (e: Error) => ({
  type: PhoneActionTypes.PHONE_ADD_ERROR,
  payload: { error: e }
});

export const editPhoneRequest = () => ({
  type: PhoneActionTypes.PHONE_EDIT_REQUEST
});

export const editPhoneSuccess = (phone: PhoneState) => ({
  type: PhoneActionTypes.PHONE_EDIT_SUCCESS,
  payload: { contact: phone }
});

export const editPhoneError = (e: Error) => ({
  type: PhoneActionTypes.PHONE_EDIT_ERROR,
  payload: { error: e }
});

export const deletePhoneRequest = () => ({
  type: PhoneActionTypes.PHONE_DELETE_REQUEST
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
