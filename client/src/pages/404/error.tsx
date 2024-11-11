import { Header } from "../../components";
import { Footer } from "../../components/footer/footer";
export const ErrorPage = () => { 
  return ( 
    <div className="error-page">
          <Header />
          <h4>Данной страницы не существует</h4>
          <Footer />
    </div>
  )
}