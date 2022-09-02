import { useTranslation } from "react-i18next";
import DailyForecast from "../../components/DailyForecast";
import HourlyForecast from "../../components/HourlyForecast";
import TemperatureAndDetails from "../../components/TemperatureAndDetails";
import TimeAndLocation from "../../components/TimeAndLocation";
import { useWeather } from "../../hooks/useWeather";
import { Units } from "../../utils/types";
import { UserSettings } from "../../utils/interfaces";

interface MainWidgetProps {
    userSettings: UserSettings;
    weatherQuery: { q: string };
}

function MainWidget({ userSettings, weatherQuery }: MainWidgetProps) {
    const { t } = useTranslation();

    const { isLoading, currentWeather, hourlyWeather, dailyWeather } = useWeather({ ...weatherQuery, units: userSettings.units, lang: userSettings.lang });

    const tempUnit = userSettings.units === Units.metric ? " °C" : " °F";

    const speedUnit = userSettings.units === Units.metric ? " m/s" : " mph";

    if (isLoading) {
        return (
            <div className="flex w-full flex-col items-center justify-center overflow-hidden opacity-75">
                <div className="loader mb-4 h-12 w-12 rounded-full border-4 border-t-4 border-colors-primary border-t-colors-secondary ease-linear"></div>
                <h2 className="text-center text-xl font-semibold text-colors-primary">{t("loading")}</h2>
                <p className="w-2/3 text-center text-colors-primary">{t("loading_description")}</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col lg:flex-row">
            <div className="lg:mt-4 lg:mr-4 lg:w-3/4 flex flex-col justify-between">
                <TimeAndLocation weather={currentWeather} />
                <TemperatureAndDetails weather={currentWeather} tempUnit={tempUnit} speedUnit={speedUnit} />

                <DailyForecast id="daily-forecast" title={t("daily_forecast")} items={dailyWeather} tempUnit={tempUnit} />
            </div>
            <div className="lg:w-1/4">
                <HourlyForecast id="hourly-forecast" title={t("hourly_forecast")} items={hourlyWeather} tempUnit={tempUnit} />
            </div>
        </div>
    );
}

export default MainWidget;
