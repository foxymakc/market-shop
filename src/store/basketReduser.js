const defaultState = {
  products: [],
  selectedProducts: [],
};

const START_RENDER_BASKET_PRODUCTS = "START_RENDER_BASKET_PRODUCTS";
const ADD_IN_BASKET_PRODUCTS = "ADD_IN_BASKET_PRODUCTS";
const DELETE_IN_BASKET_PRODUCT = "DELETE_IN_BASKET_PRODUCT";
const POSITIVE_CHANGE_COUNT_PRODUCT = "POSITIVE_CHANGE_COUNT_PRODUCT";
const NEGATIVE_CHANGE_COUNT_PRODUCT = "NEGATIVE_CHANGE_COUNT_PRODUCT";
const ADD_SELECTED_PRODUCTS = "ADD_SELECTED_PRODUCTS";
const SELECTED_ALL_PRODUCTS = "SELECTED_ALL_PRODUCTS";
const DELETE_SELECTED_PRODUCT = "DELETE_SELECTED_PRODUCT";
const DELETE_SELECTED_PRODUCTS_IN_BASKET = "DELETE_SELECTED_PRODUCTS_IN_BASKET";

export const basketReduser = (state = defaultState, action) => {
  switch (action.type) {
    case START_RENDER_BASKET_PRODUCTS:
      return { ...state, products: action.payload };

    case ADD_IN_BASKET_PRODUCTS:
      return { ...state, products: [...state.products, action.payload] };

    case DELETE_IN_BASKET_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    case POSITIVE_CHANGE_COUNT_PRODUCT:
      return {
        ...state,
        products: state.products.map(elm => {
          if (elm.id === action.payload.id) {
            action.payload.count = action.payload.count + 1
            return action.payload
          }
          return elm
        })
      };
    
      case NEGATIVE_CHANGE_COUNT_PRODUCT:
        return {
          ...state,
          products: state.products.map(elm => {
            if (elm.id === action.payload.id) {
              action.payload.count = action.payload.count - 1
              return action.payload
            }
            return elm
          })
        };

    case ADD_SELECTED_PRODUCTS:
      return {
        ...state,
        selectedProducts: [...state.selectedProducts, action.payload],
      };

    case SELECTED_ALL_PRODUCTS:
      return { ...state, selectedProducts: action.payload };

    case DELETE_SELECTED_PRODUCT:
      return {
        ...state,
        selectedProducts: state.selectedProducts.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    case DELETE_SELECTED_PRODUCTS_IN_BASKET:
      return {
        ...state,
        products: state.products
          .filter((i) => !state.selectedProducts.includes(i))
          .concat(
            state.selectedProducts.filter((i) => !state.products.includes(i))
          ),
      };

    default:
      return state;
  }
};

export const startRenderBasketProductsAction = (payload) => ({
  type: START_RENDER_BASKET_PRODUCTS,
  payload,
});
export const addInBasketProductsAction = (payload) => ({
  type: ADD_IN_BASKET_PRODUCTS,
  payload,
});
export const positiveChangeCountProductAction = (payload) => ({
  type: POSITIVE_CHANGE_COUNT_PRODUCT,
  payload,
});
export const negativeChangeCountProductAction = (payload) => ({
  type: NEGATIVE_CHANGE_COUNT_PRODUCT,
  payload,
});
export const deleteInBasketProductAction = (payload) => ({
  type: DELETE_IN_BASKET_PRODUCT,
  payload,
});
export const addSelectedProductsAction = (payload) => ({
  type: ADD_SELECTED_PRODUCTS,
  payload,
});
export const selectedAllProductsAction = (payload) => ({
  type: SELECTED_ALL_PRODUCTS,
  payload,
});
export const deleteSelectedProductAction = (payload) => ({
  type: DELETE_SELECTED_PRODUCT,
  payload,
});
export const deleteSelectedProductsInBasketAction = () => ({
  type: DELETE_SELECTED_PRODUCTS_IN_BASKET,
});
