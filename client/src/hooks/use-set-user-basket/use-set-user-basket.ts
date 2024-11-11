import { useDispatch } from "react-redux";
import { setUserBasket } from "../../slices/user-basket-slice";
import { jwtDecode } from "jwt-decode";
import { getUserBasket } from '../../api/get-user-basket'
import { getCookieToken} from '../../utils/get-cookie-token'
export const useSetUserBasket =  () => {
  const dispatch = useDispatch();
  const handleSetUserBasket = async () => {
    const cookieValue: string | undefined =   getCookieToken()
    if ( cookieValue) { 
      const parsedUser = jwtDecode(cookieValue);
      const userBasket = await getUserBasket(parsedUser.id)
dispatch(setUserBasket(userBasket));
    }
}
return { handleSetUserBasket };

}
