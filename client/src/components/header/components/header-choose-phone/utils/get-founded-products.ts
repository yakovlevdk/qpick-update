import { useSelector } from "react-redux";
export const useGetFoundedProducts = () => {
  const allProducts = useSelector(
    (state: RootState) => state.products.products
  );
  const handleGetFoundedProducts = (searchValue: string) => {
    return allProducts.filter((product) =>
      product.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  };
  return { handleGetFoundedProducts };
};
