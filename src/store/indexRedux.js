// import { createStoreHook } from "react-redux";
import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { productReduser } from "./productReduser";
import { userReduser } from "./userReduser";

const rootReducer = combineReducers({
  user: userReduser,
  product: productReduser,
});

export const store = createStore(rootReducer, composeWithDevTools());
