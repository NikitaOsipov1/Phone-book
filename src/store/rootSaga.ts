import { all } from "redux-saga/effects";
import {authSaga} from "../features/auth/redux/saga";

export default function* rootSaga() {
    yield all([
        authSaga(),
    ])
}