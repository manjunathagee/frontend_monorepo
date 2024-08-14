import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useProtectedRoute } from "./protectedRoute";
import { usePublicRoute } from "./publicRoute";
import NotFound from "../components/NotFound";

export const AppRoutes = () => {
  const publicRoutes = usePublicRoute();
  const privateRoutes = useProtectedRoute();

  const routes = [
    ...publicRoutes,
    ...privateRoutes,
    { path: "*", element: <NotFound /> },
  ];
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};
