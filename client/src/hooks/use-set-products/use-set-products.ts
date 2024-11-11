import { useDispatch } from "react-redux";
import { setProducts } from "../../slices/products-slice";
import { getProducts } from "../../api/get-products";
export const useSetProducts = () => {
  const dispatch = useDispatch();
  const handleSetProducts = () => {
    const getProductsJSON = async () => {
      const products = await getProducts();
      dispatch(setProducts(products));
    };
    getProductsJSON();
  };
  return { handleSetProducts };
};
