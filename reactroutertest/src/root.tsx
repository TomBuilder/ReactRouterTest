import React from 'react';
import { Outlet, NavLink, useNavigate } from "react-router-dom";

const Root: React.FC = () => {
   const navigate = useNavigate();
   const routeWorkflowClick = () => {
      navigate("/workflow");
   };

   return (
      <>
         <p>Die Hauptseite mit Navigation</p>
         <NavLink to="/workflow">Workflow</NavLink>
         <button type='button' onClick={routeWorkflowClick}>Workflow</button>
         <Outlet />
         <p>Fusszeile</p>
      </>);
}

export default Root;