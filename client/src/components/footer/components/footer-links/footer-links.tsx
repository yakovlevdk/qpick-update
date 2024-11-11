import { Link } from "react-router-dom";

export const FooterLinks: React.FC = () => {
  return (
    <div className="footer-links">
      <Link to={"/favorites"}>
        <span>Избранное</span>
      </Link>

      <Link to={"/basket"}>
        {" "}
        <span>Корзина</span>
      </Link>
      <Link to={"/contacts"}>
        {" "}
        <span>Контакты</span>
      </Link>
    </div>
  );
};
