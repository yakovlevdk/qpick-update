import { Header } from "./components";
import { Footer } from "./components/footer/footer";
import { MainPage } from "./pages/main/main";
import "./qpick.scss";
import { useSetBaskets } from "./hooks/use-set-baskets/use-set-baskets";
import { useSetProducts } from "./hooks/use-set-products/use-set-products";
import { useSetUserBasket } from "./hooks/use-set-user-basket/use-set-user-basket";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCounterUserBasket } from "./slices/user-basket-slice";
import { RootState }from './store'
import  {basketType} from './types/basketType'
function Qpick() {
  const { handleSetBaskets } = useSetBaskets();
  const { handleSetProducts } = useSetProducts();
  const { handleSetUserBasket } = useSetUserBasket();
  const dispatch = useDispatch();
  const baskets = useSelector((state: RootState) => state.allBaskets.baskets);
  const userBasket = useSelector((state: RootState) => state.userBasket.basket);

  const calculateCounter = (basket: basketType[]) => {
    return basket.reduce((total, userBasket) => {
      return (
        total +
        userBasket.products.reduce((subtotal, product) => {
          return subtotal + product.quantity;
        }, 0)
      );
    }, 0);
  };
  useEffect(() => {
    handleSetProducts();
    handleSetBaskets();
  }, []);
  useEffect(() => {
    handleSetUserBasket();
    dispatch(setCounterUserBasket(calculateCounter(userBasket)));
  }, [baskets]);
  return (
    <>
      <div>
        <Header />
        <MainPage />
        <Footer />
      </div>
    </>
  );
}

export default Qpick;
