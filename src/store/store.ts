// import { legacy_createStore as createStore } from "redux";
// import reducer from "../reducer/reducer";

// const store = createStore(reducer);

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducer/reducer";

const store = configureStore({
  reducer: {
    posts: reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
