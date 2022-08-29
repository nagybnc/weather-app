import { useEffect, useState } from "react";
import { useErrorHandler } from "react-error-boundary";
import { FormattedGroupApiResponseItem, SearchParams } from "../utils/interfaces";
import { fetchWeatherData, formatCurrentCities } from "../utils/util";

export const useCities = (searchParams: SearchParams) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [cities, setCities] = useState<Array<FormattedGroupApiResponseItem>>([]);
    const handleError = useErrorHandler();

    useEffect(() => {
        const setGroupWeatherData = async () => {
            try {
                setIsLoading(true);
                const formattedGroupWeatherData = await fetchWeatherData("group", searchParams).then(formatCurrentCities);
                setCities(formattedGroupWeatherData);
            } catch (error) {
                handleError(error);
            } finally {
                setIsLoading(false);
            }
        };
        setGroupWeatherData();
    }, [searchParams.units, searchParams.lang]);

    return {
        isLoading,
        cities,
    };
};
