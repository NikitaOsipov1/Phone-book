import {UserAction, UserActionTypes, UserState} from "./types";

const initialState: UserState = {
    errors: [],
    isLogin: false
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.LOGIN:
            return {
                errors: [],
                isLogin: true
            }
        case UserActionTypes.LOGIN_ERROR:
            return {
                ...state,
                isLogin: false,
                errors: [action.payload.error]
            }
        case UserActionTypes.LOGOUT:
            return {
                errors: [],
                isLogin: false
            }
        default:
            return state
    }
}