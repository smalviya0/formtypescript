// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import logInSlice from "./logInSlice";
// import signUpSlice from "./signUpSlice";

// const store = configureStore({
//   reducer: {
//     signup: signUpSlice,
//     signin: logInSlice
//   },
// });

// export default store;

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logInSlice from "./logInSlice";
import signUpSlice from "./signUpSlice";

const rootReducer = combineReducers({
  signup: signUpSlice,
  signin: logInSlice
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;









