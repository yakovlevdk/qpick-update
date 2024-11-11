import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearFilteredProducts } from "../../../../../../slices/filtered-products-by-price-slice";

interface CatalogChoosePanelItemProps {
  title: string;
  imgUrl: string;
  linkUrl: string;
}

export const CatalogChoosePanelItem: React.FC<CatalogChoosePanelItemProps> = ({
  title,
  imgUrl,
  linkUrl,
}) => {
  const dispatch = useDispatch();

  const setNewFilteredProductsByType = () => {
    dispatch(clearFilteredProducts());
  };
  return (
    <div className="catalog-choose-panel-item">
      <img src={imgUrl} className="catalog-choose-panel-item-img" />
      <Link to={linkUrl} onClick={setNewFilteredProductsByType}>
        {" "}
        <span className="catalog-choose-panel-item-title">{title}</span>{" "}
      </Link>
    </div>
  );
};
