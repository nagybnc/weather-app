import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Error, ErrorHandler } from "./components/Error";
import { useUserSettings } from "./hooks/useUserSettings";
import { useWeather } from "./hooks/useWeather";

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
        <h1 className="text-3xl bg-red-500 text-center">
            <ErrorBoundary FallbackComponent={Error} onError={ErrorHandler}>
                Weather app init
            </ErrorBoundary>
        </h1>
    );
}

export default App;
