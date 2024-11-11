import { Link } from "react-router-dom";
export const EmptyFavorites = () => {
  return (
    <div className="favorites-empty">
      <img src="/broken-heart.webp" width={350} alt="Broken Heart" />
      <span className="favorites-empty-header">Избранных товаров пока нет</span>
      <span className="favorites-empty-span">
        Но никогда не поздно это исправить :)
      </span>
      <Link to="/catalog">
        <button>В каталог товаров</button>
      </Link>
    </div>
  );
};
