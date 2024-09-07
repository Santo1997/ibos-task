import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Store from "../components/pages/Store";
import OrderDetails from "../components/pages/OrderDetails";
import Login from "../components/pages/Login";
import Signup from "../components/pages/Signup";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: async () => {
      return fetch("https://ibos-server.vercel.app/chairs");
    },

    children: [
      {
        path: "/",
        element: (
          <PrivateRoutes>
            <Store />
          </PrivateRoutes>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoutes>
            <OrderDetails />
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

export default router;
