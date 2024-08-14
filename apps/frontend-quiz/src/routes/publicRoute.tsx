import { RouteObject } from "react-router-dom";
import QuizSelection from "../components/QuizSelection";
import { paths } from "./paths";

export const usePublicRoute = (): RouteObject[] => [
  {
    path: paths.home,
    element: <QuizSelection />,
  },
];
