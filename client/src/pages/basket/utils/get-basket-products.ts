import { productType } from '../../../types/productType'
import{ Product} from '../../../types/basketType'
export const GetBasketProducts = (allProducts:  productType[], productsList: Product[]) => {

  return allProducts.filter((product1) => {
    return productsList.some((product2) => {
      return product1._id === product2["product_id"];
    });
  });
};
