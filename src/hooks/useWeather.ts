import { useEffect, useState } from "react";
import { FormattedCurrentApiResponse, FormattedForecast, SearchParams } from "../utils/store";
import { fetchWeatherData, formatCurrentWeather, formatForecastWeather } from "../utils/util";

export const useWeather = (searchParams: SearchParams) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [currentWeather, setCurrentWeather] = useState<FormattedCurrentApiResponse>({} as FormattedCurrentApiResponse);
    const [hourlyWeather, setHourlyWeather] = useState<Array<FormattedForecast>>({} as Array<FormattedForecast>);
    const [dailyWeather, setDailyWeather] = useState<Array<FormattedForecast>>({} as Array<FormattedForecast>);

    useEffect(() => {
        const setWeatherData = async () => {
            try {
                setIsLoading(true);
                const formattedCurrentWeather = await fetchWeatherData("weather", searchParams).then(formatCurrentWeather);
                const { lat, lon } = formattedCurrentWeather;

                const formattedForecastWeather = await fetchWeatherData("onecall", {
                    lat,
                    lon,
                    exclude: "current,minutely,alerts",
                    units: searchParams.units,
                    lang: searchParams.lang,
                }).then((data) => formatForecastWeather({ ...data, lang: searchParams.lang }));

                setCurrentWeather(formattedCurrentWeather);
                setHourlyWeather(formattedForecastWeather.hourly);
                setDailyWeather(formattedForecastWeather.daily);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };
        setWeatherData();
    }, [searchParams.q, searchParams.units, searchParams.lang]);

    return {
        isLoading,
        currentWeather,
        hourlyWeather,
        dailyWeather,
    };
};
