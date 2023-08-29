import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Register from "./components/Register/Register";
// import Login from "./components/Login/Login";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import All from "./components/AllGames/AllGames";
import Game from "./components/Game/Game";
import CategoryPage from "./components/CategoryPage/CategoryPage.jsx";
import SortByPage from "./components/SortByPage/SortByPage.jsx";
import PlatformPage from './components/PlatformPage/PlatformPage';
// import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import NotFound from './components/NotFound/NotFound';

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout></Layout>,
      children: [
        // { index:true,  element: <Login></Login>},
        // { path: "/signup",  element: <Register></Register>},
        {
          path: "/home",
          element: (
            // <ProtectedRoute>
              <Home></Home>
            // </ProtectedRoute>
          ),
        },
        {
          path: "/all",
          element: (
            // <ProtectedRoute>
              <All></All>
            // </ProtectedRoute>
          ),
        },
        {
          path: "/sortBy/:sortId",
          element: (
            // <ProtectedRoute>
              <SortByPage></SortByPage>
            // </ProtectedRoute>
          ),
        },
       
        {
          path: "/platform/:platformId",
          element: (
            // <ProtectedRoute>
              <PlatformPage></PlatformPage>
            // </ProtectedRoute>
          ),
        },
       
        {path: '/Categories/:categoryId' , element:
        // <ProtectedRoute>
        <CategoryPage/>
        // </ProtectedRoute>
        }
       
      ],
    },
    { path: "/game/:id", element: 
    // <ProtectedRoute>
    <Game></Game>
    // </ProtectedRoute>
   },
    { path: "*", element: 
    <NotFound></NotFound>
   },
  ]);
  return (
    <>
    
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}
