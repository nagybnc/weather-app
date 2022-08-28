import { useState } from "react";
import { useUserSettings } from "./hooks/useUserSettings";
import { useWeather } from "./hooks/useWeather";

function App() {
    const { userSettings, changeUserSettings } = useUserSettings();
    const [query, setQuery] = useState({ q: "budapest" });

    const { isLoading, currentWeather } = useWeather({ ...query, units: userSettings.units, lang: userSettings.lang });
    console.log(userSettings);
    console.log(currentWeather);

    return <h1 className="text-3xl bg-red-500 text-center">Weather app init</h1>;
}

export default App;
