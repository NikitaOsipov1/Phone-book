import {all} from "redux-saga/effects";
import {authSaga} from "../features/auth/redux/saga";
import {phoneSaga} from "../features/phones/redux/saga";

export default function* rootSaga() {
    yield all([
        authSaga(),
        phoneSaga()
    ])
}