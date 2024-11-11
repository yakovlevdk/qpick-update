import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Qpick from "./qpick.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/login/login.tsx";
import { store } from "./store.ts";
import "./index.scss";
import { PrimeReactProvider } from "primereact/api";
import { Catalog } from "./pages/catalog/catalog.tsx";
import { Provider } from "react-redux";
import { Product } from "./pages/product/product.tsx";
import { Basket } from "./pages/basket/basket.tsx";
import { Register } from "./pages/register/register.tsx";
import { Profile } from "./pages/profile/profile.tsx";
import { Favorites } from "./pages/favorites/favorites.tsx";
import { AdminPanel } from "./pages/admin-panel/admin-panel.tsx";
import { ErrorPage} from './pages/404/error.tsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Qpick />,
  },
  {
    path: "/home",
    element: <Qpick />,
  },
  {
    path: "/catalog",
    element: <Catalog />,
  },
  {
    path: "/catalog/:type",
    element: <Catalog />,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },

  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
  {
    path: "/basket",
    element: <Basket />,
  },
  {
    path: "/adminpanel",
    element: <AdminPanel />,
  },
  {
    path: '*', 
    element: <ErrorPage/>

  }, 
  {
    path: '/error', 
    element: <ErrorPage/>

  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrimeReactProvider>
      <Provider store={store}>
        <div className="qpick-column">
          <RouterProvider router={router} />
        </div>
      </Provider>
    </PrimeReactProvider>
  </StrictMode>
);
