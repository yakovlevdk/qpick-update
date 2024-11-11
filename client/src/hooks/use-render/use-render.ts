import { useSetBaskets } from "../use-set-baskets/use-set-baskets";
import { useSetProducts } from "../use-set-products/use-set-products";
import { useSetUserBasket } from "../use-set-user-basket/use-set-user-basket";
export const useRender = () => {
  const { handleSetBaskets } = useSetBaskets();
  const { handleSetProducts } = useSetProducts();
  const { handleSetUserBasket } = useSetUserBasket();
  const handleRender = () => {
    handleSetBaskets();
    handleSetProducts();
    handleSetUserBasket();
  };
  return { handleRender };
};
