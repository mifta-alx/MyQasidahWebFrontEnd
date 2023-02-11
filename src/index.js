import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root'
import { ErrorPage, Home, Kitab, Qasidah , AddQasidah, DetailQasidah, EditQasidah, Login, Register, AddKitab, DetailKitab, EditKitab} from './layout';
import { Nav } from './components';
import { createStore, compose, applyMiddleware} from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import reducers from './reducers'

const store = createStore(reducers, compose(applyMiddleware(thunk)))

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
      {
        path: "kitab/add",
        element: <AddKitab />,
      },
      {
        path: "kitab/detail/:id",
        element: <DetailKitab />,
      },
      {
        path: "kitab/edit/:id",
        element: <EditKitab />,
      },
    ],
  },
  {
    path: "/",
    element: <Nav />,
    children : [
      {
        path:"login",
        element:<Login/>
      },
      {
        path:"signup",
        element:<Register/>
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);