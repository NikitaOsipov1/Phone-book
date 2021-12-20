import {UserAction, UserActionTypes, UserState} from "./types";

const initialState: UserState = {
    // errors: [],
    isLogin: false
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.LOGIN:
            return {
                ...state,
                isLogin: true
            }
        case UserActionTypes.LOGIN_ERROR:
            return {
                ...state,
                isLogin: false,
                // errors: [...state.errors, ...action.payload.error]
            }
        case UserActionTypes.LOGOUT:
            return {
                ...state,
                isLogin: false
            }
        default:
            return state
    }
}