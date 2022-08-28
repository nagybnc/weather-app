import { useEffect, useState } from "react";
import { UserSettings } from "../utils/interfaces";
import { Languages, Themes, Units } from "../utils/types";

export const defaultUserSettings: UserSettings = {
    lang: Languages.en,
    theme: Themes.light,
    units: Units.metric,
};

export const useUserSettings = () => {
    const [userSettings, setUserSettings] = useState<UserSettings>(defaultUserSettings);

    useEffect(() => {
        const existingUserSettings = localStorage.getItem("userSettings");
        if (existingUserSettings) {
            setUserSettings(JSON.parse(existingUserSettings));
        } else {
            localStorage.setItem("userSettings", JSON.stringify(defaultUserSettings));
        }
    }, []);

    const changeUserSettings = (newSettings: object) => {
        setUserSettings({ ...userSettings, ...newSettings });
        localStorage.setItem("userSettings", JSON.stringify({ ...userSettings, ...newSettings }));
    };

    return {
        userSettings,
        changeUserSettings,
    };
};
