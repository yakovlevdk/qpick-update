import { login} from '../../../api/login'
import { useNavigate} from 'react-router-dom'
interface loginProps { 
        emailValue: string,
        passwordValue: string,
}

export const useLogin = () => { 
    const navigate = useNavigate()
    const handleLogin = async ({ emailValue, passwordValue} : loginProps) => {
        const data = {
            email: emailValue,
            password: passwordValue,
          };
        const JSONData = JSON.stringify(data);
        if (JSONData) {
          const response = await login(JSONData)
    
          const res = await response.json();
          if (res) {
            navigate("/");
          }
        }
      };
      return {handleLogin }
}

