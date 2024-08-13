import {
  Landing,
  HomeLayout,
  About,
  Error,
  Products,
  SingleProduct,
  Checkout,
  Cart,
  Register,
  Login,
  Orders,
} from "./pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ErrorElement } from "./components";
import { loader as landingLoader } from "./pages/Landing";
import { loader as productsLoader } from "./pages/Products";

export default function App() {
  //create an instance which will get out of create router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
          errorElement: <ErrorElement />,
          loader: landingLoader,
        },

        { path: "products", element: <Products />, loader: productsLoader },
        {
          path: "products/:id",
          element: <SingleProduct />,
          errorElement: <ErrorElement />,
        },
        { path: "cart", element: <Cart />, errorElement: <ErrorElement /> },
        {
          path: "checkout",
          element: <Checkout />,
          errorElement: <ErrorElement />,
        },
        { path: "about", element: <About />, errorElement: <ErrorElement /> },
        { path: "orders", element: <Orders />, errorElement: <ErrorElement /> },
      ],
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <Error />,
    },
    {
      path: "/register",
      element: <Register />,
      errorElement: <Error />,
    },
  ]);
  return <RouterProvider router={router} />;
}
