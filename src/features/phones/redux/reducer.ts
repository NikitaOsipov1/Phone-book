import * as PhoneActionTypes from "./types";
import type {Reducer} from "redux";
import type {PhoneActions} from './actions';
import {initialState} from "src/features/phones/redux/initialState";

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

export type PhonesState = { phones: Array<PhoneState> };

export const phoneReducer: Reducer<PhonesState, PhoneActions> = (state = initialState, action) => {
    switch (action.type) {
        case PhoneActionTypes.PHONE_ADD_REQUEST:
            const {phone} = action.payload
            return {
                ...state,
                phones: [...state.phones, action.payload]
            };
        case PhoneActionTypes.PHONE_GET_REQUEST:
            return {
                ...state
            };
        default:
            return state;
    }
};
