import { useDispatch, useSelector } from "react-redux";
import { changeCountItem } from "../../../../api/change-count-item";
import { useSetBaskets } from "../../../../hooks/use-set-baskets/use-set-baskets";
import { deleteFromBasket } from "../../../../api/delete-from-basket";
import { deleteCounterUserBasket } from "../../../../slices/user-basket-slice";
import { useRender } from "../../../../hooks/use-render/use-render";
import { RootState} from '../../../../store'
import { productType} from '../../../../types/productType'

interface BasketItemProps { 
  productsFromBasket: productType[]
}

export const BasketItem: React.FC<BasketItemProps> = ({ productsFromBasket }) => {
  const userBasket = useSelector((state: RootState) => state.userBasket.basket);
  const products = userBasket[0].products;
  const { handleSetBaskets } = useSetBaskets();
  const dispatch = useDispatch();
  const { handleRender } = useRender();

  const handlePlusItem = async (productId: string, operator: string) => {
    await changeCountItem(userBasket[0]["user_id"], productId, operator);
    handleRender();
  };

  const handleDeleteFromBasket = async (productId: string) => {
    await deleteFromBasket(userBasket[0]["user_id"], productId);
    handleRender();
    dispatch(deleteCounterUserBasket());
  };

  const checkQuantity = (productId: string) => {
    const prod = products.find((pr) => pr["product_id"] === productId);
    if (prod) {
      return prod.quantity;
    } else {
      handleSetBaskets();
      return 0;
    }
  };

  return (
    <>
      {productsFromBasket.map((product) => (
        <div className="basket-product" key={product._id}>
          <div className="basket-product-top">
            <img
              src={product.imgUrl}
              width={product.type === "iPhone" ? 180 : 160}
              alt={product.title}
            />
            <img
              src="/trash.png"
              className="basket-product-delete-img"
              width={30}
              height={30}
              alt="Удалить"
              onClick={async () => {
                await handleDeleteFromBasket(product._id);
              }}
            />
            <div className="basket-product-info">
              <span className="basket-product-info-title">
                {product.title} {product.specifications.color}{" "}
                {product.specifications.storage}
              </span>
              <span className="basket-product-info-price">
                {product.price} ₽
              </span>
            </div>
          </div>

          <div className="basket-product-price">
            <div className="basket-product-counter">
              <img
                src="/minus.png"
                alt="Уменьшить"
                onClick={() => {
                  handlePlusItem(product["_id"], "-");
                }}
              />
              <span>{checkQuantity(product._id)}</span>
              <img
                src="/plus.svg"
                alt="Увеличить"
                onClick={() => {
                  handlePlusItem(product["_id"], "+");
                }}
              />
            </div>
            <span className="basket-product-total-price">
              {checkQuantity(product["_id"]) * product.price} ₽
            </span>
          </div>
        </div>
      ))}
    </>
  );
};
