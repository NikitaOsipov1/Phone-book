import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./reducers";
import thunk from "redux-thunk";
import {saveState, loadState} from './localStorage'

const persistedState = loadState();
const store = createStore(rootReducer, persistedState, applyMiddleware(thunk))

store.subscribe(() => {
    saveState(store.getState());
});

export default store
