import React from 'react';
import { useSettings } from "./root"
import type { Settings as settingType } from "../types/types";

const Workflow: React.FC = () => {
   const [settings, setSettings] = useSettings() as [settingType, (setting: settingType) => void];

   const settingsClick = () => {
      const newSettings = { value1: new Date().toLocaleTimeString(), hasChanged: true };
      setSettings(newSettings);
   };

   //useBeforeUnload(
   //   React.useCallback(() => {
   //      setSettingsChanged(false);
   //      alert(settings?.value1);
   //   }, [settingsChanged])
   //);

   return (
      <>
         <p>Workflows... Setting: {settings.value1}</p>
         <p><button type="button" onClick={settingsClick}>Settings ändern</button></p>
      </>
   );
}

export default Workflow;