import { FormattedForecast } from "../utils/store";
import { getWeatherIcon } from "../utils/util";

interface HourlyForecastProps {
    id: string;
    title: string;
    items: Array<FormattedForecast>;
    unit: string;
}

function HourlyForecast({ id, title, items, unit }: HourlyForecastProps) {
    return (
        <div>
            <div className="mt-6 flex items-center justify-start">
                <p className="font-medium uppercase text-colors-primary">{title}</p>
            </div>
            <hr className="my-2 border-colors-primary" />

            <div id={id} className="flex flex-row flex-wrap gap-2 text-colors-primary lg:flex-col">
                {items.map((item: FormattedForecast) => {
                    return (
                        <div key={item.id} className="flex flex-grow flex-row items-center justify-around rounded-md bg-background-secondary p-2 lg:p-0">
                            <p className="text-sm font-medium">{item.title}</p>
                            <img src={getWeatherIcon(item.icon)} alt="" className="w-10" />
                            <p className="font-medium">{`${typeof item.temp === "number" && item.temp.toFixed() + unit}`}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default HourlyForecast;
