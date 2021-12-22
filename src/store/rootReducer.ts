import {combineReducers} from "redux";
import {userReducer} from "../features/auth/redux/reducer";


export const rootReducer = combineReducers({
    user: userReducer,
})

export type RootState = ReturnType<typeof rootReducer>
