import { useDispatch } from "react-redux";
import { setFilteredProductsByPrice } from "../../slices/filtered-products-by-price-slice";
interface Product {
  id: number;
  imgUrl: string;
  type: string;
  title: string;
  category: string;
  price: number;
  description: string;
  specifications: {
    storage: string;
    color: string;
    battery: string;
  };
}

export const useSortByPrice = () => {
  const dispatch = useDispatch();
  const handleSortByPrice = (productsOnSort: Product[]) => {
    const filteredProducts = [...productsOnSort].sort(
      (a, b) => a.price - b.price
    );
    dispatch(setFilteredProductsByPrice(filteredProducts));
  };
  return { handleSortByPrice };
};
