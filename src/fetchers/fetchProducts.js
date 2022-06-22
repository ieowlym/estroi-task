import axios from "axios";

export function fetchProducts(categoryId) {
  return axios
    .get(
      `http://e-stroi.kz:8082/catalog/client/item?categoryId=${categoryId}&lang=ru`
    )
    .then((res) => res.data);
}

//http://e-stroi.kz:8082/catalog/client/item?categoryId=11&lang=ru
