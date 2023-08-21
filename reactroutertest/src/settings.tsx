import React from 'react';
import { useSettings } from "./root"
import type { Settings as settingType } from "../types/types";

const Settings: React.FC = () => {
   const [settings, setSettings] = useSettings() as [settingType, (setting: settingType) => void];

   const settingsClick = () => {
      const newSettings = {...settings,  value1: new Date().toLocaleTimeString(), hasChanged: true };
      setSettings(newSettings);
   };

   return (
      <>
         <p>Einstellungen... Setting: {settings.value1}</p>
         <p><button type="button" onClick={settingsClick}>Settings ändern</button></p>
      </>
   );
}

export default Settings;