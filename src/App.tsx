import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useTranslation } from "react-i18next";
import { Error, ErrorHandler } from "./components/Error";
import LocationSelector from "./components/LocationSelector";
import SettingsBar from "./components/SettingsBar";
import DailyForecast from "./components/DailyForecast";
import HourlyForecast from "./components/HourlyForecast";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import { useUserSettings } from "./hooks/useUserSettings";
import { useWeather } from "./hooks/useWeather";
import { Themes, Units } from "./utils/types";

function App() {
    const { t } = useTranslation();
    const { userSettings, changeUserSettings } = useUserSettings();
    const [query, setQuery] = useState({ q: "budapest" });

    const { isLoading, currentWeather, dailyWeather, hourlyWeather } = useWeather({ ...query, units: userSettings.units, lang: userSettings.lang });

    const unit = userSettings.units === Units.metric ? " °C" : " °F";

    return (
        <div id="wrapper" className={`${userSettings.theme === Themes.light ? "theme-light" : "theme-dark"} content-wrapper`}>
            <div className={`shadow-gray-400 mx-auto h-fit max-w-screen-lg bg-background-primary py-5 px-4 shadow-xl sm:my-4`}>
                <ErrorBoundary FallbackComponent={Error} onError={ErrorHandler}>
                    <div className="my-4 flex flex-col items-center">
                        <SettingsBar userSettings={userSettings} changeUserSettings={changeUserSettings} />
                        <div className="flex w-3/4 flex-row items-center justify-center space-x-4">
                            <LocationSelector setQuery={setQuery} />
                        </div>
                    </div>
                    {isLoading ? (
                        <div className="flex w-full flex-col items-center justify-center overflow-hidden opacity-75">
                            <div className="loader mb-4 h-12 w-12 rounded-full border-4 border-t-4 border-colors-primary border-t-colors-secondary ease-linear"></div>
                            <h2 className="text-center text-xl font-semibold text-colors-primary">{t("loading")}</h2>
                            <p className="w-2/3 text-center text-colors-primary">{t("loading_description")}</p>
                        </div>
                    ) : (
                        <div className="flex flex-col lg:flex-row">
                            <div className="lg: mt-4 lg:mr-4 lg:w-3/4">
                                <TimeAndLocation weather={currentWeather} />
                                <TemperatureAndDetails weather={currentWeather} unit={unit} />

                                <DailyForecast id="daily-forecast" title={t("daily_forecast")} items={dailyWeather} unit={unit} />
                            </div>
                            <div className="lg:w-1/4">
                                <HourlyForecast id="hourly-forecast" title={t("hourly_forecast")} items={hourlyWeather} unit={unit} />
                            </div>
                        </div>
                    )}
                </ErrorBoundary>
            </div>
        </div>
    );
}

export default App;
