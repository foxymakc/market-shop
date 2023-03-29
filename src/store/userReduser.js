const defaultState = {
  isAuth: false,
  user: {},
};

export const userReduser = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return { ...state };

    default:
      return state;
  }
};
