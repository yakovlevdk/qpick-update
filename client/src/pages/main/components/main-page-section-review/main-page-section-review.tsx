export const MainPageOriginalSectionReview: React.FC = () => {
  return (
    <div className="main-page-section-review">
      <div className="main-page-section-review-container">
        <div className="main-page-section-review-title">
          <h2>
            Высокие стандарты обслуживания и индивидуальный подход
            <span style={{ color: "#FFA542" }}>.</span>
          </h2>
        </div>
        <div className="main-page-section-review-rev-container">
          <div className="main-page-section-review-rev-author">
            <img src="/user.png" />
            <span>Захар</span>
            <img
              src="/rating.png"
              className="main-page-section-review-rating-img"
            />
          </div>

          <div className="main-page-section-review-rev-content">
            Примерно год назад покупал iPhone 12. Смотрел в нескольких
            магазинах, нигде кроме как у вас не было нужной мне модели, поэтому
            купил у вас. Похожая ситуация была с Mac этой весной, тоже нужен был
            срочно и поэтому взял в вашем магазине. Теперь по-умолчанию захожу в
            ваш интернет-магазин и покупаю именно в этом магазине. Кстати
            обслуживание ваше мне тоже нравится – не напрягаешься во время
            покупки вообще.
          </div>
          <div className="main-page-section-review-rev-link">
            <a href={"#"}>Читать все отзывы в 2ГИС </a>
          </div>
        </div>
      </div>
    </div>
  );
};
