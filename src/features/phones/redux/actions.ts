import {PhoneState} from "./reducer";
import * as PhoneActionTypes from "./types";

export const getPhoneRequest = () => ({
    type: PhoneActionTypes.PHONE_GET_REQUEST
});

export const getPhoneSuccess = () => ({
    type: PhoneActionTypes.PHONE_GET_SUCCESS
});

export const getPhoneError = (e: Error) => ({
    type: PhoneActionTypes.PHONE_GET_ERROR
});



export const addPhone = (phone: PhoneState) => ({
    type: PhoneActionTypes.PHONE_ADD_REQUEST,
    payload: phone
})

export const editPhone = () => ({
    type: PhoneActionTypes.PHONE_EDIT_REQUEST,
})

export const deletePhone = () => ({
    type: PhoneActionTypes.PHONE_DELETE,
});

export type PhoneActions = ReturnType<typeof addPhone
    | typeof editPhone
    | typeof deletePhone
    | typeof getPhoneRequest
    | typeof getPhoneSuccess
    | typeof getPhoneError>
