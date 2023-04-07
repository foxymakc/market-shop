// import { createStoreHook } from "react-redux";
import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { productReduser } from "./productReduser";
import { userReduser } from "./userReduser";
import { navCatalogReduser } from "./navCatalogReduser";
import { basketReduser } from "./basketReduser";

const rootReducer = combineReducers({
  user: userReduser,
  product: productReduser,
  navCatalog: navCatalogReduser,
  basketProduct: basketReduser,
});

export const store = createStore(rootReducer, composeWithDevTools());
