import { put, takeLatest } from 'redux-saga/effects'
import * as actions from "./actions";
import {LOGIN_REQUEST} from './types';

function* login(action: ReturnType<typeof actions.loginRequest>) {
    try {
        const email = action.payload.email;
        // api call

        if (email) {
            yield put(actions.loginSuccess(email));
        } else {
            yield put(actions.loginFailed(new Error("")));
        }

    } catch (e) {
        yield put(actions.loginFailed(e as Error));
    }
}

export function* authSaga() {
    yield takeLatest(LOGIN_REQUEST, login);
}