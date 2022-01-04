import { rootReducer } from "./rootReducer";
import { saveState, loadState } from "./localStorage";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import thunk from "redux-thunk";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const persistedState = loadState();

const store = configureStore({
  devTools: true,
  preloadedState: persistedState,
  reducer: rootReducer,
  middleware: [sagaMiddleware, thunk]
});

sagaMiddleware.run(rootSaga)

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
