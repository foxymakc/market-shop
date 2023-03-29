const defaultState = {
  active: false,
};

const CLICK_NAV_CATALOG = "CLICK_NAV_CATALOG";

export const navCatalogReduser = (state = defaultState, action) => {
  switch (action.type) {
    case CLICK_NAV_CATALOG:
      return { ...state, active: action.payload };
    default:
      return state;
  }
};

export const clickNavCatalogAction = (payload) => ({
  type: CLICK_NAV_CATALOG,
  payload,
});
