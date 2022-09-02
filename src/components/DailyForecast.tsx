import { FormattedForecast } from "../utils/interfaces";
import { getWeatherIcon } from "../utils/util";
import { BodyText, BodyTextSmall, CapitalText } from "./styled/typography";

interface DailyForecastProps {
    id: string;
    title: string;
    items: Array<FormattedForecast>;
    tempUnit: string;
}

function DailyForecast({ id, title, items, tempUnit }: DailyForecastProps) {
    return (
        <>
            <div className="mt-6 flex items-center justify-start">
                <CapitalText>{title}</CapitalText>
            </div>
            <hr className="my-2 border-colors-primary" />
            <div id={id} className="flex gap-4 text-colors-primary">
                {items.map((item: FormattedForecast) => {
                    const temp = typeof item.temp === "number" ? item.temp.toFixed() : `${item.temp.max.toFixed()} / ${item.temp.min.toFixed()}`;
                    return (
                        <div key={item.id} className="flex flex-grow flex-col items-center justify-between rounded-md bg-background-secondary py-2">
                            <BodyTextSmall bold>{item.title}</BodyTextSmall>
                            <img src={getWeatherIcon(item.icon)} alt="" className="my-1 w-12" />
                            <BodyText>{`${temp + tempUnit}`}</BodyText>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default DailyForecast;
