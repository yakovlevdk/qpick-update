import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { RenderProducts } from "./components/render-product";
import { RootState} from '../../../../store'
import { isFilteredCurrentProducts } from "../../utlis/is-filtered-current-products";
import {
  clearFilteredProductsByType,
  setFilteredProductsByType,
} from "../../../../slices/filtered-products-by-type-slice";
interface Product {
  _id: string;
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

export const CatalogCards: React.FC = () => {
  const dispatch = useDispatch();
  const { type } = useParams();

  const filteredByTypeProducts = useSelector(
    (state: RootState) => state.filteredProductsByType.products
  );

  const filteredByPriceProducts = useSelector(
    (state: RootState) => state.filteredProducts.products
  );

  const allProducts = useSelector(
    (state: RootState) => state.products.products
  );

  useEffect(() => {
    if (type) {
      const filteredByType = allProducts.filter(
        (product: Product) => product.type.toLowerCase() === type
      );
      dispatch(setFilteredProductsByType(filteredByType));
    }
  }, [type, allProducts, dispatch]);

  return (
    <div className="catalog-card-container">
      {isFilteredCurrentProducts(filteredByPriceProducts)
        ? RenderProducts(filteredByPriceProducts)
        : isFilteredCurrentProducts(filteredByTypeProducts)
        ? RenderProducts(filteredByTypeProducts)
        : RenderProducts(allProducts)}
    </div>
  );
};
