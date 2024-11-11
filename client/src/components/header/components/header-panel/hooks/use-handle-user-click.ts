import { useNavigate } from "react-router-dom";
export const useHandleUserClick = () => {
  const navigate = useNavigate();
  const handleUserClick = (cookieValue: boolean) => {
    if (cookieValue) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };
  return { handleUserClick };
};
