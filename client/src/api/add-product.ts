import { productType} from '../types/productType'

export const addProduct = async (product: productType) => {
  await fetch(`http://localhost:3000/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
};
