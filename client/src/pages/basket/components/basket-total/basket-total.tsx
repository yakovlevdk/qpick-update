import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState} from '../../../../store'
import  {productType} from '../../../../types/productType'
interface  BasketTotalProps  { 
  productsFromBasket:   productType[] 
}
export const BasketTotal:React.FC< BasketTotalProps >= ({ productsFromBasket  }) => {
  const userBasket = useSelector((state: RootState) => state.userBasket.basket);
  const userBasketProducts = userBasket[0].products;

  const [totalPrice, setTotalPrice] = useState(0);

  
  useEffect(() => {
    const total = userBasketProducts.reduce((acc, basketItem) => {
     const product = productsFromBasket.find(
      (prod) => prod["_id"] === basketItem["product_id"]
     );
     if (product) {
      const quantity = Number(basketItem.quantity);
      const price = Number(product.price);
   
      return acc + quantity * price;
     }
     return acc;
    }, 0);
   
    setTotalPrice(total);
   }, [productsFromBasket, userBasketProducts]);
   
  
  return (
    <div className="basket-total">
      <div className="basket-total-info">
        <span>ИТОГО</span>
        <span>{totalPrice} ₽</span>
      </div>
      <button>Перейти к оформлению</button>
    </div>
  );
};
