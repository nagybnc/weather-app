import { CurrentApiResponse, FormattedCurrentApiResponse, SearchParams } from "./store";

export const fetchWeatherData = (infoType: string, searchParams: SearchParams) => {
    const url = new URL(import.meta.env.VITE_BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({ ...searchParams, appid: import.meta.env.VITE_API_KEY }).toString();

    return fetch(url).then((res) => res.json());
};

export const formatCurrentWeather = (data: CurrentApiResponse): FormattedCurrentApiResponse => {
    const {
        coord: { lat, lon },
        main: { temp, feels_like, temp_min, temp_max, humidity, pressure },
        name,
        dt,
        timezone,
        sys: { country, sunrise, sunset },
        weather,
        wind: { speed },
    } = data;

    const { description: details, icon } = weather[0];

    return {
        lat,
        lon,
        temp,
        feels_like,
        temp_min,
        temp_max,
        humidity,
        pressure,
        name,
        dt,
        timezone,
        country,
        sunrise,
        sunset,
        details,
        icon,
        speed,
    };
};
