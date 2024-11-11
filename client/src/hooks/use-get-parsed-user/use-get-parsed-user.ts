import { jwtDecode } from "jwt-decode";
import {userType } from '../../types/userType'
export const useGetParsedUser = () => {
  const handleGetParsedUser = (cookieValue: string) => {
    try {
      if (cookieValue) {
        const parsed: userType = jwtDecode(cookieValue);
        if (parsed) {
          return parsed;
        }
      }
    } catch (error) {
      console.error("Ошибка декодирования токена:", error);
      return;
    }
  };
  return { handleGetParsedUser };
};
