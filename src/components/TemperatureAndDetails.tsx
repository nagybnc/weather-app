import { ArrowDownTrayIcon, ArrowTrendingDownIcon, ArrowTrendingUpIcon, CloudIcon, FlagIcon, InformationCircleIcon, MapPinIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "react-i18next";
import { FormattedCurrentApiResponse } from "../utils/interfaces";
import { getWeatherIcon, timeFormatter } from "../utils/util";

interface TemperatureAndDetailsProps {
    weather: FormattedCurrentApiResponse;
    unit: string;
}

function TemperatureAndDetails({ weather: { details, icon, temp, temp_min, temp_max, sunrise, sunset, speed, humidity, pressure, feels_like, timezone }, unit }: TemperatureAndDetailsProps) {
    const { t, i18n } = useTranslation();

    return (
        <>
            <div className="flex items-center justify-center py-6 text-colors-primary">
                <p id="current-temperature" className="text-5xl">{`${temp.toFixed() + unit}`}</p>
            </div>
            <div className="flex flex-col items-center justify-around gap-2 py-3 text-colors-primary md:flex-row">
                <div className="flex flex-col items-start space-y-2">
                    <div className="flex items-center gap-1 text-sm font-light">
                        <SunIcon className="h-4 w-4" />
                        {`${t("rise")}:`} <span className="font-medium">{timeFormatter(sunrise, timezone, i18n.resolvedLanguage)}</span>
                    </div>

                    <div className="flex items-center gap-1 text-sm font-light">
                        <MoonIcon className="h-4 w-4 " />
                        {`${t("set")}:`} <span className="font-medium ">{timeFormatter(sunset, timezone, i18n.resolvedLanguage)}</span>
                    </div>

                    <div className="flex items-center gap-1 text-sm font-light">
                        <ArrowTrendingUpIcon className="h-4 w-4 " />
                        {`${t("high")}:`} <span className="font-medium ">{`${temp_max.toFixed() + unit}`}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm font-light">
                        <ArrowTrendingDownIcon className="h-4 w-4 " />
                        {`${t("low")}:`} <span className="font-medium ">{`${temp_min.toFixed() + unit}`}</span>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src={getWeatherIcon(icon)} alt={details} className="rounded-md bg-background-secondary" />
                    <p className="p-2 text-center text-xl capitalize text-colors-primary">{details}</p>
                </div>
                <div className="flex flex-col items-start space-y-2">
                    <div className="flex items-center gap-1 text-sm font-light">
                        <InformationCircleIcon className="h-4 w-4 " />
                        {`${t("real_feel")}:`}
                        <span className="font-medium ">{`${feels_like.toFixed() + unit}`}</span>
                    </div>

                    <div className="flex items-center gap-1 text-sm font-light">
                        <CloudIcon className="h-4 w-4 " />
                        {`${t("humidity")}:`}
                        <span className="font-medium ">{`${humidity.toFixed()}%`}</span>
                    </div>

                    <div className="flex items-center gap-1 text-sm font-light">
                        <FlagIcon className="h-4 w-4 " />
                        {`${t("wind")}:`}
                        <span className="font-medium ">{`${speed.toFixed()} km/h`}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm font-light">
                        <ArrowDownTrayIcon className="h-4 w-4 " />
                        {`${t("pressure")}:`}
                        <span className="font-medium">{`${pressure.toFixed()}`}</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TemperatureAndDetails;
