import { listProduct, listBasketUser } from "./consts";

////////функционал который должен выполняться на бэке//////////
////////////////////----ЗАГЛУШКА------/////////////////////////
export const BackList = (
  renderElements,
  sumElement,
  filter,
  category,
  searchText
) => {
  return new Promise((resolve, reject) => {
    let newSortFlag;
    if (filter === null) {
      newSortFlag = "popular";
    } else {
      newSortFlag = filter;
    }

    if (searchText) {
      let newSearchText = searchText.toLowerCase();
      let arr = listProduct.filter(
        (product) => product.name.toLowerCase().indexOf(newSearchText) >= 0
      );
      return resolve(Filter(renderElements, sumElement, newSortFlag, arr));
    }

    if (category) {
      let arr = listProduct.filter((product) => product.category === category);
      resolve(Filter(renderElements, sumElement, newSortFlag, arr));
    } else {
      resolve(Filter(renderElements, sumElement, newSortFlag, listProduct));
    }
  });
};

function Filter(renderElements, sumElement, filter, arr) {
  if (filter === "popular") {
    let list = arr.sort((a, b) => b.views - a.views);
    const data = {
      products: list.slice(renderElements, sumElement),
      countProducts: arr.length,
      sortingFlag: "popular",
    };
    return data;
  }

  if (filter === "new") {
    let list = arr.sort((a, b) => a.date - b.date);
    const data = {
      products: list.slice(renderElements, sumElement),
      countProducts: arr.length,
      sortingFlag: "new",
    };
    return data;
  }

  if (filter === "cheap") {
    let list = arr.sort((a, b) => a.price - b.price);
    const data = {
      products: list.slice(renderElements, sumElement),
      countProducts: arr.length,
      sortingFlag: "cheap",
    };
    return data;
  }

  if (filter === "expensive") {
    let list = arr.sort((a, b) => b.price - a.price);
    const data = {
      products: list.slice(renderElements, sumElement),
      countProducts: arr.length,
      sortingFlag: "expensive",
    };
    return data;
  }
}

export const BackLogin = (email, password) => {
  return new Promise((resolve, reject) => {
    let auth;
    let jwt;
    if (email === "1234@mail.ru") {
      if (password === "123") {
        auth = true;
        jwt = "TEST123";
        return resolve({ auth, jwt });
      }
    }
    return reject((auth = false));
  });
};

export const BackCheckToken = (token) => {
  return new Promise((resolve, reject) => {
    let auth;
    if (token === "TEST123") {
      auth = true;
      return resolve(auth);
    }
    return reject((auth = false));
  });
};

export const BackgetUserInfo = (token) => {
  return new Promise((resolve, reject) => {
    let userInfo;
    if (token === "TEST123") {
      userInfo = { name: "Тестовый Пользователь", phone: "8 000 000 00 00" };
      return resolve(userInfo);
    }
    return reject(console.error("Ошибка"));
  });
};

export const BackgetUserBasket = (token) => {
  return new Promise((resolve, reject) => {
    if (token === "TEST123") {
      return resolve(listBasketUser);
    }
    return reject(console.error("Ошибка"));
  });
};
