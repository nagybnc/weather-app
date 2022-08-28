import { useEffect, useState } from "react";
import { FormattedCurrentApiResponse, SearchParams } from "../utils/store";
import { fetchWeatherData, formatCurrentWeather } from "../utils/util";

export const useWeather = (searchParams: SearchParams) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [currentWeather, setCurrentWeather] = useState<FormattedCurrentApiResponse>({} as FormattedCurrentApiResponse);

    useEffect(() => {
        const setWeatherData = async () => {
            try {
                setIsLoading(true);
                const formattedCurrentWeather = await fetchWeatherData("weather", searchParams).then(formatCurrentWeather);
                setCurrentWeather(formattedCurrentWeather);
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
    };
};
