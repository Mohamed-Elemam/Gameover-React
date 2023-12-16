import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import All from "./components/AllGames/AllGames";
import Game from "./components/Game/Game";
import CategoryPage from "./components/CategoryPage/CategoryPage.jsx";
import SortByPage from "./components/SortByPage/SortByPage.jsx";
import PlatformPage from "./components/PlatformPage/PlatformPage";
import NotFound from "./components/NotFound/NotFound";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout></Layout>,
      children: [
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/all",
          element: <All></All>,
        },
        {
          path: "/sortBy/:sortId",
          element: <SortByPage></SortByPage>,
        },

        {
          path: "/platform/:platformId",
          element: <PlatformPage></PlatformPage>,
        },

        {
          path: "/Categories/:categoryId",
          element: <CategoryPage />,
        },
      ],
    },
    {
      path: "/game/:id",
      element: <Game></Game>,
    },
    { path: "*", element: <NotFound></NotFound> },
  ]);
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}
