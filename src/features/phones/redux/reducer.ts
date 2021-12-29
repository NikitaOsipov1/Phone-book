import * as PhoneActionTypes from "./types";
import type { Reducer } from "redux";
import type { PhoneActions } from "./actions";

const initialState = {
  phones: null,
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
  registered: string
};

export type PhonesState = {
  phones: Array<PhoneState> | null,
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

    default:
      return state;
  }
};
