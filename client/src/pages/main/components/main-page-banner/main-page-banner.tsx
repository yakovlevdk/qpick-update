export const MainPageBanner: React.FC = () => {
  return (
    <div className="main-page-banner">
      <img src="/mobilebanner.svg" className="mobile-banner" />
      <div className="main-page-mvp-img-container">
        <img src="/mainpagebanner.png" className="main-page-banner-mvp-img" />
        <div className="main-page-banner-daughter-img-container">
          <img
            src="/iphonebannermain.png"
            className="main-page-banner-daughter-img"
          />
        </div>
      </div>
    </div>
  );
};
