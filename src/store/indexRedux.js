// import { createStoreHook } from "react-redux";
import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { productReduser } from "./productReduser";
import { userReduser } from "./userReduser";
import { navCatalogReduser } from "./navCatalogReduser";

const rootReducer = combineReducers({
  user: userReduser,
  product: productReduser,
  navCatalog: navCatalogReduser,
});

export const store = createStore(rootReducer, composeWithDevTools());
