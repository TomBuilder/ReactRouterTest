import React from 'react'
import ReactDOM from 'react-dom/client'
import {
   createBrowserRouter,
   RouterProvider
} from "react-router-dom";
import Root, { loader as rootLoader } from './root';
import Workflow from './workflow';
import Settings from './settings';

const router = createBrowserRouter([
   {
      path: "/",
      element: <Root />,
      loader: rootLoader,
      //action: rootAction,
      //errorElement: <ErrorPage />,
      children: [
         {
            //errorElement: <ErrorPage />,
            children: [
               //{
               //   index: true,
               //   element: <Index />
               //},
               {
                  path: "workflow",
                  element: <Workflow />,
                  //loader: contactLoader,
                  //action: contactAction
               },
               {
                  path: "settings",
                  element: <Settings />,
                  //loader: contactLoader,
                  //action: editAction
               }
            ]
         }
      ]
   },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      <RouterProvider router={router } />
  </React.StrictMode>,
)
