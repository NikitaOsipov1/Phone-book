import { rootReducer } from "./rootReducer";
import { saveState, loadState } from "./localStorage";
import { configureStore } from "@reduxjs/toolkit";

const persistedState = loadState();
const store = configureStore({devTools: true, preloadedState: persistedState, reducer: rootReducer});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
