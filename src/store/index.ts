import { rootReducer } from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import thunk from "redux-thunk";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  devTools: true,
  reducer: rootReducer,
  middleware: [sagaMiddleware, thunk]
});

sagaMiddleware.run(rootSaga)

export default store;
