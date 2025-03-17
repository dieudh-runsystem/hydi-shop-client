import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import Layout from "../pages/Home/Layout";

import "../assets/css/bootstrap.css";
import "../assets/css/color.css";
import "../assets/css/fontawesome.css";
import "../assets/css/plugins.css";
import "../assets/css/responsive.css";
import "../assets/css/style.css";
import ShopDetail from "../pages/Shop/ShopDetail";
import Cart from "../pages/Cart/Cart";

const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "shop/:id",
        element: <ShopDetail />,
      },
      {
        path: "cart",
        element: <Cart />,
      }
    ],
  },
];

const router = createBrowserRouter([
  {
    element: <Outlet />,
    children: appRoutes,
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
