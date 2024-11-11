import { Link } from "react-router-dom";

export const FooterInfo: React.FC = () => {
  return (
    <div className="footer-info">
      <Link to={"/profile"}>
        <span>Личный кабинет</span>
      </Link>
      <span>Россия, г.Калининград</span>
    </div>
  );
};
