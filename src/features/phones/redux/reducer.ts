import * as PhoneActionTypes from "./types";
import type { Reducer } from "redux";
import type { PhoneActions } from "./actions";

const initialState = {
  phones: [],
  isLoading: false,
  error: null
};

export type PhoneState = {
  id: string,
  isActive: boolean,
  age: number,
  name: {
    first: string,
    last: string
  },
  company: string,
  email: string,
  phone: string,
  address: string,
  registered?: string
};

export type EditablePhone = {
  name: {
    first: string,
    last: string
  },
  address: string,
  age: number,
  company: string,
  email: string,
  phone: string,
  isActive: boolean,
  registered?: string
}

export type PhonesState = {
  phones: Array<PhoneState> | [],
  isLoading: boolean,
  error: null | Error
}

export const phoneReducer: Reducer<PhonesState, PhoneActions> = (state = initialState, action) => {
  switch (action.type) {
    case PhoneActionTypes.PHONES_GET_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
        phones: []
      };

    case PhoneActionTypes.PHONES_GET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        phones: action.payload.phones
      };

    case PhoneActionTypes.PHONES_GET_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
        phones: []
      };

    case PhoneActionTypes.PHONE_ADD_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case PhoneActionTypes.PHONE_ADD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        phones: [...state.phones, action.payload.contact]
      };

    case PhoneActionTypes.PHONE_ADD_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };

    case PhoneActionTypes.PHONE_EDIT_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case PhoneActionTypes.PHONE_EDIT_SUCCESS:
      const phones = [...state.phones];
      const targetIndex = phones.findIndex(phone => phone.id === action.payload.contact.id);
      phones[targetIndex] = action.payload.contact;

      return {
        ...state,
        isLoading: false,
        error: null,
        phones: phones
      };

    case PhoneActionTypes.PHONE_EDIT_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };

    case PhoneActionTypes.PHONE_DELETE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case PhoneActionTypes.PHONE_DELETE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        phones: state.phones?.filter(phone => phone.id !== action.payload.id) ?? []
      };

    case PhoneActionTypes.PHONE_DELETE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};
