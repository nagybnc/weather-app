import { FormattedForecast } from "../utils/store";
import { getWeatherIcon } from "../utils/util";

interface DailyForecastProps {
    id: string;
    title: string;
    items: Array<FormattedForecast>;
    unit: string;
}

function DailyForecast({ id, title, items, unit }: DailyForecastProps) {
    return (
        <>
            <div className="mt-6 flex items-center justify-start">
                <p className="font-medium uppercase text-colors-primary">{title}</p>
            </div>
            <hr className="my-2 border-colors-primary" />
            <div id={id} className="flex gap-4 text-colors-primary">
                {items.map((item: FormattedForecast) => {
                    const temp = typeof item.temp === "number" ? item.temp.toFixed() : `${item.temp.max.toFixed()} / ${item.temp.min.toFixed()}`;
                    return (
                        <div key={item.id} className="flex flex-grow flex-col items-center justify-between rounded-md bg-background-secondary py-2">
                            <p className="text-sm font-medium">{item.title}</p>
                            <img src={getWeatherIcon(item.icon)} alt="" className="my-1 w-12" />
                            <p className="font-medium">{`${temp + unit}`}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default DailyForecast;
