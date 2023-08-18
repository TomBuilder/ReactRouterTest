import React from 'react';
import { Outlet, useNavigate } from "react-router-dom";

const Root: React.FC = () => {
   const navigate = useNavigate();

   const routeWorkflowClick = () => {
      navigate("/workflow");
   };

   const routeSettingsClick = () => {
      navigate("/settings");
   };

   return (
      <>
         <p>Die Hauptseite mit Navigation</p>
         <button type='button' onClick={routeWorkflowClick}>Workflow</button>
         <button type='button' onClick={routeSettingsClick}>Einstellungen</button>
         <Outlet />
         <p>Fusszeile</p>
      </>);
}

export default Root;