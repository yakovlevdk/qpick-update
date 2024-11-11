import { Link } from "react-router-dom";
import "./logo.scss";
export const Logo: React.FC = () => {
  return (
    <>
      <div className="logo">
        <Link to={"/"}>
          <span>QPICK</span>
        </Link>
      </div>
    </>
  );
};
