// export default class UserStore {
//   constructor() {
//     this._isAuth = false;
//     this._user = {};
//   }

//   setIsAuth(bool) {
//     this._isAuth = bool;
//   }
//   setUser(user) {
//     this._user = user;
//   }

//   get isAuth() {
//     return this._isAuth;
//   }
//   get user() {
//     return this._user;
//   }
// }

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
