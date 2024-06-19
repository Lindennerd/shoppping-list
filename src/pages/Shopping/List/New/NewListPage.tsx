import { RouteObject } from "react-router-dom";
import { RestrictedRoute } from "../../../../core/auth/RestrictedRoute";
import { NewList } from "./NewList";

export const NewListPage: RouteObject = {
  path: "/shopping/list/new",
  element: (
    <RestrictedRoute>
      <NewList />
    </RestrictedRoute>
  ),
};
