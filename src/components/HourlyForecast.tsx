import { FormattedForecast } from "../utils/interfaces";
import { getWeatherIcon } from "../utils/util";
import { BodyText, BodyTextSmall, CapitalText } from "./styled/typography";

interface HourlyForecastProps {
    id: string;
    title: string;
    items: Array<FormattedForecast>;
    tempUnit: string;
}

function HourlyForecast({ id, title, items, tempUnit }: HourlyForecastProps) {
    return (
        <div>
            <div className="mt-6 flex items-center justify-start">
                <CapitalText>{title}</CapitalText>
            </div>
            <hr className="my-2 border-colors-primary" />

            <div id={id} className="flex flex-row flex-wrap gap-2 text-colors-primary lg:flex-col">
                {items.map((item: FormattedForecast) => {
                    return (
                        <div key={item.id} className="flex flex-grow flex-row items-center justify-around rounded-md bg-background-secondary p-2 lg:p-0">
                            <BodyTextSmall bold>{item.title}</BodyTextSmall>
                            <img src={getWeatherIcon(item.icon)} alt="" className="w-10" />
                            <BodyText>{`${typeof item.temp === "number" && item.temp.toFixed() + tempUnit}`}</BodyText>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default HourlyForecast;
