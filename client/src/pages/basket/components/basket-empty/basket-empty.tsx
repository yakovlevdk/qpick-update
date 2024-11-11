import { Link } from "react-router-dom";
export const EmptyBasket = () => {
  return (
    <div className="basket-empty">
      <img src="/empty-basket.svg" />
      <span className="empty-basket-header">Корзина пуста</span>
      <span className="empty-basket-span">
        Но это никогда не поздно исправить :)
      </span>
      <Link to={"/catalog"}>
        <button className="empty-basket-button">В каталог товаров</button>{" "}
      </Link>
    </div>
  );
};
