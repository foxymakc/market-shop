const defaultState = {
  sortingFlag: {},
  category: {},
  products: [],
  displayedNumderCards: 0,
  totalCount: 0,
};

const START_RENDER_PRODUCTS = "START_RENDER_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";
const REWRITE_DISPLAYED_NUMDER_CARDS = "REWRITE_DISPLAYED_NUMDER_CARDS";
const REWRITE_TOTAL_COUNT = "REWRITE_TOTAL_COUNT";
const REWRITE_SORTING_FLAG = "REWRITE_SORTING_FLAG";

export const productReduser = (state = defaultState, action) => {
  switch (action.type) {
    case START_RENDER_PRODUCTS:
      return { ...state, products: action.payload };
    case ADD_PRODUCTS:
      return { ...state, products: [...state.products, ...action.payload] };
    case REWRITE_DISPLAYED_NUMDER_CARDS:
      return { ...state, displayedNumderCards: action.payload };
    case REWRITE_TOTAL_COUNT:
      return { ...state, totalCount: action.payload };
    case REWRITE_SORTING_FLAG:
      return { ...state, sortingFlag: action.payload };
    default:
      return state;
  }
};

export const startRenderProductsAction = (payload) => ({
  type: START_RENDER_PRODUCTS,
  payload,
});
export const addProductsAction = (payload) => ({
  type: ADD_PRODUCTS,
  payload,
});
export const rewriteDisplayedNumderCardsAction = (payload) => ({
  type: REWRITE_DISPLAYED_NUMDER_CARDS,
  payload,
});
export const rewriteTotalCountAction = (payload) => ({
  type: REWRITE_TOTAL_COUNT,
  payload,
});
export const rewriteSortingFlagAction = (payload) => ({
  type: REWRITE_SORTING_FLAG,
  payload,
});
