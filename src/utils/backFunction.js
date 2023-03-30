import { listProduct } from "./consts";

////////функционал который должен выполняться на бэке//////////
////////////////////----ЗАТЫЧКА------/////////////////////////
export const BackList = (renderElements, sumElement, filter, category) => {
  return new Promise((resolve, reject) => {
    let newSortFlag;
    if (filter === null) {
      newSortFlag = "popular";
    } else {
      newSortFlag = filter;
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
