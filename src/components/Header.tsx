import { useState } from "react";
import { MagnifyingGlassIcon, MapPinIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "react-i18next";
import { LangType, ThemeType, UnitsType, UserSettings } from "../utils/store";

interface HeaderProps {
    setQuery: Function;
    userSettings: UserSettings;
    changeUserSettings: ({}) => void;
}

function Header({ setQuery, userSettings: { lang, theme, units }, changeUserSettings }: HeaderProps) {
    const [city, setCity] = useState("");
    const { t, i18n } = useTranslation();

    const handleSearch = () => {
        if (city !== "") {
            setQuery({ q: city });
            setCity("");
        }
    };

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;
                setCity("");
                setQuery({ lat, lon });
            });
        }
    };

    const handleUnitChange = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const selectedUnit = e.currentTarget.name;
        if (units !== selectedUnit) {
            changeUserSettings({ units: selectedUnit });
        }
    };

    const handleThemeChange = (selectedTheme: string) => {
        if (theme !== selectedTheme) {
            changeUserSettings({ theme: selectedTheme });
        }
    };

    const handleLangChange = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const selectedLang = e.currentTarget.name;
        if (lang !== selectedLang) {
            changeUserSettings({ lang: selectedLang });
            i18n.changeLanguage(selectedLang);
        }
    };

    return (
        <div className="my-4 flex flex-col items-center">
            <div className="mb-8 flex flex-row justify-around self-stretch">
                <div className="flex flex-row items-center justify-center">
                    <button
                        name={LangType.en}
                        id="lang-en"
                        className={`rounded-md p-1 text-xl font-light text-colors-primary transition ease-out hover:scale-125 ${lang === LangType.en ? "bg-background-secondary" : ""}`}
                        onClick={handleLangChange}
                    >
                        EN
                    </button>
                    <p className="mx-1 text-xl text-colors-primary">/</p>
                    <button
                        name={LangType.de}
                        id="lang-de"
                        className={`rounded-md p-1 text-xl font-light text-colors-primary transition ease-out hover:scale-125 ${lang === LangType.de ? "bg-background-secondary" : ""}`}
                        onClick={handleLangChange}
                    >
                        DE
                    </button>
                </div>
                <div className="flex flex-row items-center justify-center">
                    <button
                        name={UnitsType.metric}
                        className={`rounded-md p-1 text-xl font-light text-colors-primary transition ease-out hover:scale-125 ${units === UnitsType.metric ? "bg-background-secondary" : ""}`}
                        onClick={handleUnitChange}
                    >
                        °C
                    </button>
                    <p className="mx-1 text-xl text-colors-primary">/</p>
                    <button
                        name={UnitsType.imperial}
                        className={`rounded-md p-1 text-xl font-light text-colors-primary transition ease-out hover:scale-125 ${units === UnitsType.imperial ? "bg-background-secondary" : ""}`}
                        onClick={handleUnitChange}
                    >
                        °F
                    </button>
                </div>

                <div className="flex flex-row items-center justify-center">
                    <SunIcon
                        id="theme-light"
                        onClick={() => handleThemeChange(ThemeType.light)}
                        className={`h-8 w-8 cursor-pointer rounded-md p-1 text-colors-primary transition ease-out hover:scale-125 ${theme === ThemeType.light ? "bg-background-secondary" : ""}`}
                    />
                    <p className="mx-1 text-xl text-colors-primary">/</p>
                    <MoonIcon
                        id="theme-dark"
                        onClick={() => handleThemeChange(ThemeType.dark)}
                        className={`h-8 w-8 cursor-pointer rounded-md p-1 text-colors-primary transition ease-out hover:scale-125 ${theme === ThemeType.dark ? "bg-background-secondary" : ""}`}
                    />
                </div>
            </div>
            <div className="flex w-3/4 flex-row items-center justify-center space-x-4">
                <input
                    id="search-input"
                    value={city}
                    onChange={(e) => {
                        setCity(e.target.value);
                    }}
                    onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
                        if (e.key === "Enter") {
                            handleSearch();
                        }
                    }}
                    type="text"
                    className="w-full rounded-md p-2 text-xl font-light shadow-xl focus:outline-none"
                    placeholder={t("search_placeholder")}
                />
                <MagnifyingGlassIcon onClick={handleSearch} className="h-6 w-6 cursor-pointer text-colors-primary transition ease-out hover:scale-125" />
                <MapPinIcon onClick={handleLocationClick} className="h-6 w-6 cursor-pointer text-colors-primary transition ease-out hover:scale-125" />
            </div>
        </div>
    );
}

export default Header;
