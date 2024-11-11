import { Logo } from "../logo/logo";
import { FooterLinks } from "./components/footer-links/footer-links";
import { FooterInfo } from "./components/footer-info/footer-info";
import { FooterMedia } from "./components/footer-media/footer-media";
import "./footer.scss";
export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <Logo />
      </div>
      <FooterLinks />
      <FooterInfo />
      <FooterMedia />
    </footer>
  );
};
