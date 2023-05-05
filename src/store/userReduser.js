const defaultState = {
  isAuth: false,
  user: {},
};

const LOGIN_USER = "LOGIN_USER";
const INFO_USER = "INFO_USER";

export const userReduser = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, isAuth: action.payload };
    case INFO_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export const loginUserAction = (payload) => ({
  type: LOGIN_USER,
  payload,
});
export const infoUserAction = (payload) => ({
  type: INFO_USER,
  payload,
});
