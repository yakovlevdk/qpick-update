import { useNavigate } from "react-router-dom";
import  {register  } from '../../../api/register'
type RegisterProps = {
    emailValue: string;
    passwordValue: string;
};

export const useRegister = () => { 
    const navigate = useNavigate();
    const handleRegister = async ({ emailValue, passwordValue} : RegisterProps) => {
        if (localStorage.accessToken) {
          navigate("/");
          return;
        }
        const data = {
          email: emailValue,
          password: passwordValue,
        };
        const response = await register(data)
        const res = await response.json();
        if (res) {
          navigate("/");
        }
      };
      return { handleRegister}
}

