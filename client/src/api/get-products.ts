export const getProducts = async () =>
  await fetch("http://localhost:3000/products", {
    method: "GET",
    credentials: "include",
  }).then((loadedProducts) => loadedProducts.json());
