import { listProduct } from "./consts";
 
 ////////функционал который должен выполняться на бэке//////////
 ///////////////////////////////////////////////////////////////
 
  export const BackList = (renderElements, sumElement, filter) => {
    //   console.log(renderElements, sumElement, filter);
    return new Promise((resolve, reject) => {
      if (filter === "popular") {
        let list = listProduct.sort((a, b) => b.views - a.views);
        const data = {
          products: list.slice(renderElements, sumElement),
           countProducts: listProduct.length,
       };
        return resolve(data);
      }

      if (filter === "new") {
        let list = listProduct.sort((a, b) => a.date - b.date);
        const data = {
          products: list.slice(renderElements, sumElement),
           countProducts: listProduct.length,
       };
        return resolve(data);
      }

      if (filter === "cheap") {
        let list = listProduct.sort((a, b) => a.price - b.price);
        const data = {
         products: list.slice(renderElements, sumElement),
          countProducts: listProduct.length,
      };
        return resolve(data);
      }

      if (filter === "expensive") {
        let list = listProduct.sort((a, b) => b.price - a.price);
        const data = {
          products: list.slice(renderElements, sumElement),
           countProducts: listProduct.length,
       };
        return resolve(data);
      }
    });
  };