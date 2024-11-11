import { useSetBaskets } from "../use-set-baskets/use-set-baskets";
import { useSetProducts } from "../use-set-products/use-set-products";
import { useSetUserBasket } from "../use-set-user-basket/use-set-user-basket";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../api/add-to-basket";
import { addCounterUserBasket } from "../../slices/user-basket-slice";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate} from 'react-router-dom'
import { userType}from '../../types/userType'
import { getCookieToken} from '../../utils/get-cookie-token'
export const useAddToCart = () => {
  const { handleSetBaskets } = useSetBaskets();
  const { handleSetProducts } = useSetProducts();
  const { handleSetUserBasket } = useSetUserBasket();
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [cookieValue] = useState<string | undefined>(
   () => getCookieToken())
  
  const handleAddToCart = async (productId: string) => {
    let parsedUser: userType;
      if (cookieValue) { 
        parsedUser = jwtDecode(cookieValue);
        if ( parsedUser) {
        const response = await  addToBasket(parsedUser.id, productId);
        if (!response.ok) {
          const errorData = await response
          console.error('Error:', errorData.error);
          navigate('/login')
          return;
      }
        }
      }
   
    handleSetProducts();
    handleSetBaskets();
    handleSetUserBasket();
    dispatch(addCounterUserBasket());
  };
  return { handleAddToCart };
};
