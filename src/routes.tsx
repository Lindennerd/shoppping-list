import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/Home/HomePage";
import { Layout } from "./pages/Layout/_Layout";
import { LoginPage } from "./pages/Login/LoginPage";
import { RegisterPage } from "./pages/Register/RegisterPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [HomePage, LoginPage, RegisterPage],
  },
]);
