import { put, takeLatest } from 'redux-saga/effects'
import * as actions from "./actions";
import {CHECK_LOGIN_EXPIRATION, LOGIN_REQUEST, LOGOUT} from './types';
import {getItem, removeItem, setItem} from "../../../store/localStorage";

function* login(action: ReturnType<typeof actions.loginRequest>) {
    try {
        const email = action.payload.email;
        // api call

        if (email) {
            yield put(actions.loginSuccess(email));
            setItem("email", email)

        } else {
            yield put(actions.loginFailed(new Error("")));
        }

    } catch (e) {
        yield put(actions.loginFailed(e as Error));
    }
}

function* logout(){
    removeItem("email");
}

function* checkLoginExpiration(){
    const email = getItem("email");

    if (email){
        yield put(actions.loginSuccess(email));
    }else{
        yield put(actions.logoutUser());
    }
}

export function* authSaga() {
    yield takeLatest(LOGIN_REQUEST, login);
    yield takeLatest(LOGOUT, logout);
    yield takeLatest(CHECK_LOGIN_EXPIRATION, checkLoginExpiration);
}