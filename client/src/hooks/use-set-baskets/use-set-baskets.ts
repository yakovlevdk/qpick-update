import { useDispatch } from "react-redux";
import { getBaskets } from "../../api/get-baskets";
import { setBaskets } from "../../slices/all-basket-slice";
export const useSetBaskets = () => {
  const dispatch = useDispatch();
  const handleSetBaskets = () => {
    const getBasketsJSON = async () => {
      const baskets = await getBaskets();
      dispatch(setBaskets(baskets));
    };
    getBasketsJSON();
  };
  return { handleSetBaskets };
};
