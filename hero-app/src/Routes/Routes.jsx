import { createBrowserRouter } from "react-router";
import Root from '../Components/Pages/Roots/Root';
import ErrorPage from '../Components/Pages/ErrorPage/ErrorPage';
import Home from '../Components/Pages/Home/Home';
import AppDetails from '../Components/Pages/AppDetails/AppDetails';
import AllApps from '../Components/Pages/AllApps/AllApps';
import Installed from "../Components/Pages/Installed/Installed";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch('/Data.json'),
        path: "/",
        Component: Home
      },
      {
        path: '/appDetails/:id',
        loader: () => fetch('/AppsData.json'),
        Component: AppDetails
      },
      {
        path:'/installed',
        loader: () => fetch('/AppsData.json'),
        Component:Installed

      },
      {
        path: '/allApps',
        loader: () => fetch('/AppsData.json'),
        Component: AllApps
      }
    ]
  },
]);
