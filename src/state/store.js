import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { albumReducer, songReducer, sideEffectReducer } from "./reducers";
import sagaMiddleware from "./middleware";
import { rootSaga } from "./middleware";

const reducer = combineReducers({
  albums: albumReducer,
  songs: songReducer,
  sideEffects: sideEffectReducer,
});

const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});
console.log(store.getState());
sagaMiddleware.run(rootSaga);
export default store;
