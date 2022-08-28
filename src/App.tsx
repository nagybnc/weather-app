import { useUserSettings } from "./hooks/useUserSettings";

function App() {
    const { userSettings, changeUserSettings } = useUserSettings();
    console.log(userSettings);

    return <h1 className="text-3xl bg-red-500 text-center">Weather app init</h1>;
}

export default App;
