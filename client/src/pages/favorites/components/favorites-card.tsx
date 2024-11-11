import { removeFromFavorites } from "../utils/remove-from-favorites";
import { useNavigate } from "react-router-dom";
import { useAddToCart } from "../../../hooks/use-add-to-cart/use-add-to-cart";
import { useState } from "react";
import { getCookieToken } from "../../../utils/get-cookie-token";
import { productType} from '../../../types/productType'


interface FavoritesCardProps { 
  card: productType;
}

export const FavoritesCard: React.FC<FavoritesCardProps> = ({card} ) => {
  const [cookieValue] = useState<string | undefined>(() => getCookieToken());
  const navigate = useNavigate();
  const { handleAddToCart } = useAddToCart();


  const handleButtonClick = () => {
    if (cookieValue) {
        handleAddToCart(card["_id"]);
    } else {
        navigate("/login");
    }
};
  return (
    <div className="favorites-card" key={card._id}>
      {" "}
      <img
        src="/fiil-like.svg"
        className="favorites-fill-like"
        alt="Remove from favorites"
        onClick={() => removeFromFavorites(card)}
      />
      <img
        src={card.imgUrl}
        width={card.type === "iPhone" ? 170 : 160}
        height={180}
        alt={card.title}
        className="card-img"
        onClick={() => navigate(`/product/${card._id}`)}
      />
      <span className="favorites-card-title">{card.title}</span>
      <span className="favorites-card-price">Цена: {card.price} ₽</span>
      <button
        onClick={handleButtonClick}
      >
        Добавить в корзину
      </button>
    </div>
  );
};
