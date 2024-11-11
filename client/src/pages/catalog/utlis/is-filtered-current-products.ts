import { productType} from '../../../types/productType'


export const isFilteredCurrentProducts = (products: productType[]) => {
  if (products.length > 0) {
    return true;
  } else return false;
};
