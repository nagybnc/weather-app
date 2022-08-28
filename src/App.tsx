import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Error, ErrorHandler } from "./components/Error";
import { useUserSettings } from "./hooks/useUserSettings";
import { useWeather } from "./hooks/useWeather";
import { ThemeType } from "./utils/store";

function App() {
    const { userSettings, changeUserSettings } = useUserSettings();
    const [query, setQuery] = useState({ q: "budapest" });

    const { isLoading, currentWeather, dailyWeather, hourlyWeather } = useWeather({ ...query, units: userSettings.units, lang: userSettings.lang });
    console.log(userSettings);
    console.group("___WEATHER___");
    console.log(currentWeather);
    console.log(dailyWeather);
    console.log(hourlyWeather);
    console.groupEnd();

    return (
        <div id="wrapper" className={`${userSettings.theme === ThemeType.light ? "theme-light" : "theme-dark"} content-wrapper`}>
            <div className={`shadow-gray-400 mx-auto h-fit max-w-screen-lg bg-background-primary py-5 px-4 shadow-xl sm:my-4`}>
                <ErrorBoundary FallbackComponent={Error} onError={ErrorHandler}>
                    {isLoading ? (
                        <div className="flex w-full flex-col items-center justify-center overflow-hidden opacity-75">
                            <div className="loader mb-4 h-12 w-12 rounded-full border-4 border-t-4 border-colors-primary border-t-colors-secondary ease-linear"></div>
                            <h2 className="text-center text-xl font-semibold text-colors-primary">Loading...</h2>
                            <p className="w-2/3 text-center text-colors-primary">Loading description text....</p>
                        </div>
                    ) : (
                        <div className="text-colors-primary">TODO</div>
                    )}
                </ErrorBoundary>
            </div>
        </div>
    );
}

export default App;
