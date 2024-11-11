interface MainPageOriginalSectionCardProps {
  imgUrl: string;
  title: string;
  categorie: string;
  price: number;
}

export const MainPageOriginalSectionCard: React.FC<
  MainPageOriginalSectionCardProps
> = ({ imgUrl, title, categorie, price }) => {
  return (
    <div className="main-page-original-section-card" key={Date.now()}>
      <img src={imgUrl} className="main-page-original-section-card-img" />
      <span className="main-page-original-section-card-title">{title}</span>
      <span className="main-page-original-section-card-categorie">
        {categorie}
      </span>
      <span className="main-page-original-section-card-price">
        От {price} ₽
      </span>
    </div>
  );
};
