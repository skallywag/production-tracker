import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from "./pages/homePage/HomePage";
import TestPage from "./pages/testPage/TestPage";
import App from './App';
import './styles/reset.scss'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/test",
        element: <TestPage />,
    },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
      <App/>
  </React.StrictMode>,
)
