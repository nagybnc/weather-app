import { useEffect, useState } from "react";
import { LangType, ThemeType, UnitsType, UserSettings } from "../utils/store";

export const defaultUserSettings: UserSettings = {
    lang: LangType.en,
    theme: ThemeType.light,
    units: UnitsType.metric,
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
