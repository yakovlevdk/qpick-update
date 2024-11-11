import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetFoundedProducts } from "./utils/get-founded-products";
export const HeaderChoosePhone: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [founded, setFounded] = useState([]);
  const { handleGetFoundedProducts } = useGetFoundedProducts();
  useEffect(() => {
    !!searchValue ? setIsSearching(true) : setIsSearching(false);
  }, [searchValue]);

  const searching = (e) => {
    setSearchValue(e.target.value);
    !!searchValue && setIsSearching(true);

    setTimeout(() => {
      const foundedProducts = handleGetFoundedProducts(searchValue);
      if (foundedProducts) {
        setFounded(foundedProducts);
      }
    }, 1000);
  };

  return (
    <>
      <div className="header-choose-phone">
        <input
          placeholder="Поиск товаров..."
          value={searchValue}
          onChange={searching}
        />
        {isSearching && (
          <>
            <div className="founded-products">
              {founded.map((prod) => (
                <div className="founded-item" key={prod.id}>
                  <Link to={`/product/${prod["_id"]}`}>
                    <div className="founded-item-inf">
                      <img src={prod.imgUrl} width={30} height={30} />
                      <span>{prod.title}</span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};
