import { HeaderChoosePhone } from "./components/header-choose-phone/header-choose-phone";
import { HeaderPanel } from "./components/header-panel/header-panel";
import "./header.scss";
import { Logo } from "../logo/logo";
export const Header: React.FC = () => {
  return (
    <>
      <header className="header">
        <div className="header-leftside">
          <Logo />
          <HeaderChoosePhone />
        </div>

        <HeaderPanel />
      </header>
    </>
  );
};
