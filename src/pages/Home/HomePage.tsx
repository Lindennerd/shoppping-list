import { RouteObject } from "react-router-dom";
import { RestrictedRoute } from "../../core/auth/RestrictedRoute";
import { Home } from "./Home";

export const HomePage: RouteObject = {
  path: "/",
  element: (
    <RestrictedRoute>
      <Home />
    </RestrictedRoute>
  ),
};
