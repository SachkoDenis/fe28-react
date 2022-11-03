import { combineReducers } from "@reduxjs/toolkit";

import themeReducer from "./themeReducer";
import postsReducer from "./postsReducer";
import authReducers from "./authReducers";

const reducer = combineReducers({
  themeReducer,
  postsReducer,
  authReducers
});

export default reducer;