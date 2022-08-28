import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { UserSettings } from "../utils/store";
import SwitchButton from "./common/SwitchButton";
import { Languages, SwitchButtonTypes, Themes, Units } from "../utils/types";
import { MoonIcon, SunIcon } from "./styled/icons";

interface SettingsBarProps {
    userSettings: UserSettings;
    changeUserSettings: ({}) => void;
}

function SettingsBar({ userSettings: { lang, theme, units }, changeUserSettings }: SettingsBarProps) {
    const { i18n } = useTranslation();

    const handleUnitChange = useCallback(
        (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            const selectedUnit = e.currentTarget.name;
            if (units !== selectedUnit) {
                changeUserSettings({ units: selectedUnit });
            }
        },
        [units]
    );

    const handleThemeChange = useCallback(
        (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            const selectedTheme = e.currentTarget.name;
            if (theme !== selectedTheme) {
                changeUserSettings({ theme: selectedTheme });
            }
        },
        [theme]
    );

    const handleLangChange = useCallback(
        (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            const selectedLang = e.currentTarget.name;
            if (lang !== selectedLang) {
                changeUserSettings({ lang: selectedLang });
                i18n.changeLanguage(selectedLang);
            }
        },
        [lang]
    );

    return (
        <div className="mb-8 flex flex-row justify-around self-stretch">
            <div className="flex flex-row items-center justify-center">
                <SwitchButton
                    type={SwitchButtonTypes.lang}
                    items={[
                        {
                            id: Languages.en,
                            value: "EN",
                        },
                        {
                            id: Languages.de,
                            value: "DE",
                        },
                    ]}
                    selectedId={lang}
                    onChange={handleLangChange}
                />
            </div>
            <div className="flex flex-row items-center justify-center">
                <SwitchButton
                    type={SwitchButtonTypes.unit}
                    items={[
                        {
                            id: Units.metric,
                            value: "°C",
                        },
                        {
                            id: Units.imperial,
                            value: "°F",
                        },
                    ]}
                    selectedId={units}
                    onChange={handleUnitChange}
                />
            </div>
            <div className="flex flex-row items-center justify-center">
                <SwitchButton
                    type={SwitchButtonTypes.theme}
                    items={[
                        {
                            id: Themes.light,
                            value: <SunIcon theme={Themes.light} />,
                        },
                        {
                            id: Themes.dark,
                            value: <MoonIcon theme={Themes.dark} />,
                        },
                    ]}
                    selectedId={theme}
                    onChange={handleThemeChange}
                />
            </div>
        </div>
    );
}

export default SettingsBar;
