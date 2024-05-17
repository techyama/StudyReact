import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./modules/counter"


const reducers = combineReducers({
  counter: reducer,
});

export default configureStore({
  reducer: {
    counter: reducer
  }
})
