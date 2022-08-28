import { useTranslation } from "react-i18next";
import { FormattedCurrentApiResponse } from "../utils/interfaces";

interface TimeAndLocationProps {
    weather: FormattedCurrentApiResponse;
}

function TimeAndLocation({ weather: { dt, timezone, name, country } }: TimeAndLocationProps) {
    const date = new Date((dt + timezone) * 1000);

    const { t, i18n } = useTranslation();

    return (
        <>
            <div className="my-6 flex items-center justify-center">
                <p className="text-center text-xl font-extralight text-colors-primary">
                    <>
                        <span>{date.toLocaleDateString(i18n.resolvedLanguage, { weekday: "long", year: "numeric", month: "long", day: "numeric", timeZone: "UTC" })}</span>
                        <span> | {t("local_time")}: </span>
                        <span>{date.toLocaleTimeString(i18n.resolvedLanguage, { timeZone: "UTC" })}</span>
                    </>
                </p>
            </div>
            <div className="my-3 flex items-center justify-center">
                <p id="location" className="text-3xl font-medium text-colors-primary">{`${name}${country ? `, ${country}` : ""}`}</p>
            </div>
        </>
    );
}

export default TimeAndLocation;
