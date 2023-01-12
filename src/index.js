import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter
} from "react-router-dom";
import Root from './routes/root'
import { ErrorPage, Home, Kitab, Qasidah } from './layout';
import AddQasidah from './layout/Qasidah/AddQasidah';
import DetailQasidah from './layout/Qasidah/DetailQasidah';
import EditQasidah from './layout/Qasidah/EditQasidah';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement : <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "qasidah",
        element: <Qasidah />,
      },
      {
        path: "qasidah/add",
        element: <AddQasidah />,
      },
      {
        path: "qasidah/detail/:id",
        element: <DetailQasidah />,
      },
      {
        path: "qasidah/edit/:id",
        element: <EditQasidah />,
      },
      {
        path: "kitab",
        element: <Kitab />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);