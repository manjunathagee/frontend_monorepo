import { Navigate, Outlet, RouteObject } from "react-router-dom";
import { paths } from "./paths";
import { useQuiz } from "../hooks/useQuiz";
import { Suspense } from "react";
import SharpenUp from "../components/SharpenUp";

export const useProtectedRoute = (): RouteObject[] => {
  const { selectedTopic } = useQuiz();
  if (!selectedTopic) {
    return [
      {
        path: "*",
        element: <Navigate to={paths.home} />,
      },
    ];
  }
  return [
    {
      path: "/",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      ),
      children: [
        {
          path: paths.sharpenUp,
          element: <SharpenUp />,
        },
      ],
    },
  ];
};
