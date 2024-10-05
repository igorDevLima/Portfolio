import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/Main";
import { homeRoute } from "./Home";

const routes = [
  {
    element: <MainLayout />,
    children: [homeRoute],
  },
];

export const router = createBrowserRouter(routes);
