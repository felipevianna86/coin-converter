import { combineReducers } from "redux";

import convertReducer from "./convert-reducer";

const rootReducer = combineReducers({
  converter: convertReducer,
});

export default rootReducer;
