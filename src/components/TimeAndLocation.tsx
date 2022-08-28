import { useTranslation } from "react-i18next";
import { FormattedCurrentApiResponse } from "../utils/interfaces";
import { getLocalDate, getLocalTime } from "../utils/util";
import { Text3XL, TextXL } from "./styled/typography";

interface TimeAndLocationProps {
    weather: FormattedCurrentApiResponse;
}

function TimeAndLocation({ weather: { dt, timezone, name, country } }: TimeAndLocationProps) {
    const date = new Date((dt + timezone) * 1000);

    const { t, i18n } = useTranslation();

    return (
        <>
            <div className="my-6 flex items-center justify-center">
                <TextXL light>
                    <>
                        <span>{getLocalDate(date, i18n.resolvedLanguage)}</span>
                        <span> | {t("local_time")}: </span>
                        <span>{getLocalTime(date, i18n.resolvedLanguage)}</span>
                    </>
                </TextXL>
            </div>
            <div className="my-3 flex items-center justify-center">
                <Text3XL>{`${name}${country ? `, ${country}` : ""}`}</Text3XL>
            </div>
        </>
    );
}

export default TimeAndLocation;
