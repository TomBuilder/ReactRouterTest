import React from 'react';
import { Outlet, useLoaderData, useNavigate, useOutletContext, useLocation } from "react-router-dom";
import type { Settings as settingType } from "../types/types";

export function useSettings() {
   return useOutletContext();
}

export async function loader() {
   const settings: settingType = { value1: "Intitialwert", hasChanged: false };
   return settings;
}

const Root: React.FC = () => {
   const navigate = useNavigate();
   const [settings, setSettings] = React.useState<settingType>(useLoaderData() as settingType);
   const location = useLocation();


   const routeWorkflowClick = () => {
      navigate("/workflow");
   };

   const routeSettingsClick = () => {
      navigate("/settings");
   };

   const routeRootClick = () => {
      navigate("/");
   };

   React.useEffect(() => {
      const beforeunloadCallback = (event: any) => {
         event.preventDefault();
         event.returnValue = ""
      };

      window.addEventListener("beforeunload", beforeunloadCallback);

      return () => {
         window.removeEventListener("beforeunload", beforeunloadCallback);
      };
   }, []);

   React.useEffect(() => {
      if (settings.hasChanged) {
         console.log('Location changed, save settings!', location.pathname);
         setSettings({ ...settings, hasChanged: false })
         console.log('Settings saved.', location.pathname);
      }
      else
         console.log('Location changed!', location.pathname);
   }, [location]);

   const settingsClick = () => {
      if (settings !== null) {
         const locSettings: settingType = { value1: new Date().toLocaleTimeString(), hasChanged: true };
         setSettings(locSettings);
      }
   };

   return (
      <>
         <p>Die Hauptseite mit Navigation</p>
         {settings.hasChanged ? < p > Geändert!</p > : <p></p>}
         <button type='button' onClick={routeRootClick}>Root</button>
         <button type='button' onClick={routeWorkflowClick}>Workflow</button>
         <button type='button' onClick={routeSettingsClick}>Einstellungen</button>
         <p>Settings: {settings?.value1}</p>
         <p><button type="button" onClick={settingsClick}>Settings ändern</button></p>
         <Outlet context={[settings, setSettings]} />
         <p>Eine Fusszeile</p>
      </>);
}

export default Root;