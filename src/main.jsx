import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';


import Main from './Component/Leyout/Main';
import OrderReviw from './Component/Order/OrderReviw';
import About from './Component/about/About';
import Contatct from './Component/Contact/Contatct';
import Home from './Component/Home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path:'/',
        element:<Home></Home>,
        loader: () => fetch('tshirts.json')

      },
      {
        path:'order',
        element:<OrderReviw></OrderReviw>
      },
      {
        path:"about",
        element:<About></About>
      },
      {
        path:'contact',
        element:<Contatct></Contatct>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)


