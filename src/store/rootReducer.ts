import { combineReducers } from "redux";
import { phoneReducer } from "src/features/phones/redux/reducer";
import { userReducer } from "../features/auth/redux/reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  phones: phoneReducer
});

export type RootState = ReturnType<typeof rootReducer>
