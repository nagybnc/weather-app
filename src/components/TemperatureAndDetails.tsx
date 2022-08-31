import { ArrowDownTrayIcon, ArrowTrendingDownIcon, ArrowTrendingUpIcon, CloudIcon, FlagIcon, InformationCircleIcon, MapPinIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "react-i18next";
import { BodyTextSmall, TextXL, Text5XL } from "./styled/typography";
import { FormattedCurrentApiResponse } from "../utils/interfaces";
import { getWeatherIcon, timeFormatter } from "../utils/util";

interface TemperatureAndDetailsProps {
    weather: FormattedCurrentApiResponse;
    tempUnit: string;
    speedUnit: string;
}

function TemperatureAndDetails({
    weather: { details, icon, temp, temp_min, temp_max, sunrise, sunset, speed, humidity, pressure, feels_like, timezone },
    tempUnit,
    speedUnit,
}: TemperatureAndDetailsProps) {
    const { t, i18n } = useTranslation();

    return (
        <>
            <div className="flex items-center justify-center py-6 text-colors-primary">
                <Text5XL>{`${temp.toFixed() + tempUnit}`}</Text5XL>
            </div>
            <div className="flex flex-col items-center justify-around gap-2 py-3 text-colors-primary md:flex-row">
                <div className="flex flex-col items-start space-y-2">
                    <div className="flex items-center gap-1">
                        <SunIcon className="h-4 w-4" />
                        <BodyTextSmall>{`${t("rise")}:`}</BodyTextSmall>
                        <BodyTextSmall bold>{timeFormatter(sunrise, timezone, i18n.resolvedLanguage)}</BodyTextSmall>
                    </div>

                    <div className="flex items-center gap-1">
                        <MoonIcon className="h-4 w-4" />
                        <BodyTextSmall>{`${t("set")}:`}</BodyTextSmall>
                        <BodyTextSmall bold>{timeFormatter(sunset, timezone, i18n.resolvedLanguage)}</BodyTextSmall>
                    </div>

                    <div className="flex items-center gap-1">
                        <ArrowTrendingUpIcon className="h-4 w-4" />
                        <BodyTextSmall>{`${t("high")}:`}</BodyTextSmall>
                        <BodyTextSmall bold>{`${temp_max.toFixed() + tempUnit}`}</BodyTextSmall>
                    </div>
                    <div className="flex items-center gap-1">
                        <ArrowTrendingDownIcon className="h-4 w-4" />
                        <BodyTextSmall>{`${t("low")}:`}</BodyTextSmall>
                        <BodyTextSmall bold>{`${temp_min.toFixed() + tempUnit}`}</BodyTextSmall>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src={getWeatherIcon(icon)} alt={details} className="rounded-md bg-background-secondary mb-2" />
                    <TextXL>{details}</TextXL>
                </div>
                <div className="flex flex-col items-start space-y-2">
                    <div className="flex items-center gap-1">
                        <InformationCircleIcon className="h-4 w-4 " />
                        <BodyTextSmall>{`${t("real_feel")}:`}</BodyTextSmall>
                        <BodyTextSmall bold>{`${feels_like.toFixed() + tempUnit}`}</BodyTextSmall>
                    </div>

                    <div className="flex items-center gap-1">
                        <CloudIcon className="h-4 w-4 " />
                        <BodyTextSmall>{`${t("humidity")}:`}</BodyTextSmall>
                        <BodyTextSmall bold>{`${humidity.toFixed()}%`}</BodyTextSmall>
                    </div>

                    <div className="flex items-center gap-1">
                        <FlagIcon className="h-4 w-4 " />
                        <BodyTextSmall>{`${t("wind")}:`}</BodyTextSmall>
                        <BodyTextSmall bold>{`${speed.toFixed() + speedUnit}`}</BodyTextSmall>
                    </div>
                    <div className="flex items-center gap-1">
                        <ArrowDownTrayIcon className="h-4 w-4 " />
                        <BodyTextSmall>{`${t("pressure")}:`}</BodyTextSmall>
                        <BodyTextSmall bold>{`${pressure.toFixed()}`}</BodyTextSmall>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TemperatureAndDetails;
