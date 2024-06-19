import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import AllArtAndCraftItems from "../Pages/AllArtAndCraftItems";
import AddCraftItem from "../Pages/AddCraftItem";
import MyArtAndCraftList from "../Pages/MyArtAndCraftList";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage";
import ViewDetails from "../Pages/ViewDetails";
import UpdateItem from "../Pages/UpdateItem";
import SubCategory from "../Pages/SubCategory";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement : <ErrorPage></ErrorPage>,
      children : [
        {
            path : '/',
            element : <Home></Home>,
            loader : () => fetch('https://art-aura-server.vercel.app/item')
        },
        {
            path : '/allArtAndCraftItem',
            element : <AllArtAndCraftItems></AllArtAndCraftItems>,
            loader : () => fetch('https://art-aura-server.vercel.app/item')
        },
        {
            path: '/addCraftItem',
            element : <PrivateRoute><AddCraftItem></AddCraftItem></PrivateRoute>,
        },
        {
            path : '/myArtAndCraftList',
            element: <PrivateRoute><MyArtAndCraftList></MyArtAndCraftList></PrivateRoute>,
        },
        {
            path : '/login',
            element : <Login></Login>,
        },
        {
            path : '/register',
            element : <Register></Register>
        },
        {
            path :'/viewDetails/:id',
            element :<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>
        },
        {
            path : '/updateItemRoute/:id',
            element:<PrivateRoute><UpdateItem></UpdateItem></PrivateRoute>
        },
        {
            path :'/allSub/:subCategory',
            element :<SubCategory></SubCategory>
        },
      ]
    },
  ]);