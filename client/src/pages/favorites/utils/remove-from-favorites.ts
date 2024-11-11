import { productType} from '../../../types/productType'
export const removeFromFavorites = (card: productType) => {
  const cards = localStorage.getItem("favorites");
  if (cards) { 
    const jsonCards = JSON.parse(cards);
    const newCards = jsonCards.filter((product: productType) => product._id !== card._id);
    localStorage.setItem("favorites", JSON.stringify(newCards));
  }
  location.reload();
};
