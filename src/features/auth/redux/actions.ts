import {UserAction, UserActionTypes} from "./types";
import {Dispatch} from "redux";

export const loginUser = (email: string, password: string) => {

    return (dispatch: Dispatch<UserAction>) => {

        if (email === 'test@gmail.com' && password === '1') {
            dispatch({
                type: UserActionTypes.LOGIN
            })
        } else {
            dispatch({
                type: UserActionTypes.LOGIN_ERROR
                // payload: {error: 'Credentials are wrong'}
            })
        }
    }
}
