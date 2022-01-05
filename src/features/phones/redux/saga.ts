import {call, put, takeLatest, SagaReturnType} from "redux-saga/effects";
import {PHONE_ADD_REQUEST, PHONE_DELETE_REQUEST, PHONE_EDIT_REQUEST, PHONES_GET_REQUEST} from "./types";
import {PhoneState} from "./reducer";
import {v4 as uuidv4} from "uuid";
import {
    addPhoneError, addPhoneRequest, addPhoneSuccess,
    deletePhoneError, deletePhoneRequest, deletePhoneSuccess,
    editPhoneError, editPhoneRequest, editPhoneSuccess,
    getPhonesError, getPhonesSuccess
} from "./actions";
import {fetchPhones} from "../api";

function* addPhone(action: ReturnType<typeof addPhoneRequest>) {
    try {
        const newContact: PhoneState = {
            ...action.payload.contact,
            id: uuidv4(),
            registered: new Date().toISOString()
        }

        yield put(addPhoneSuccess(newContact));

    } catch (e) {
        yield put(addPhoneError(e as Error));
    }
}

function* getPhones() {
    try {
        const data: SagaReturnType<typeof fetchPhones> = yield call(fetchPhones);
        yield put(getPhonesSuccess(data));

    } catch (e) {
        yield put(getPhonesError(e as Error));
    }
}

function* editPhone(action: ReturnType<typeof editPhoneRequest>) {
    try {
        const updateContact: PhoneState = {
            ...action.payload.contact,
            id: action.payload.id,
        }

        yield put(editPhoneSuccess(updateContact));

    } catch (e) {
        yield put(editPhoneError(e as Error));
    }
}

function* deletePhone(action: ReturnType<typeof deletePhoneRequest>) {
    try {
        yield put(deletePhoneSuccess(action.payload.id));

    } catch (e) {
        yield put(deletePhoneError(e as Error));
    }
}



export function* phoneSaga() {
    yield takeLatest(PHONE_ADD_REQUEST, addPhone);
    yield takeLatest(PHONES_GET_REQUEST, getPhones);
    yield takeLatest(PHONE_EDIT_REQUEST, editPhone);
    yield takeLatest(PHONE_DELETE_REQUEST, deletePhone);
}