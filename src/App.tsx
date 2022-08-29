import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Error, ErrorHandler } from "./components/Error";
import LocationSelector from "./components/LocationSelector";
import SettingsBar from "./components/SettingsBar";
import { useUserSettings } from "./hooks/useUserSettings";
import { Themes } from "./utils/types";
import MainWidget from "./components/widgets/MainWidget";
import SecondaryWidget from "./components/widgets/SecondaryWidget";

function App() {
    const { userSettings, changeUserSettings } = useUserSettings();
    const [query, setQuery] = useState({ q: "budapest" });

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
                    <MainWidget userSettings={userSettings} weatherQuery={query} />
                    <SecondaryWidget userSettings={userSettings} />
                </ErrorBoundary>
            </div>
        </div>
    );
}

export default App;
