import {
    CurrentApiResponse,
    FormattedCurrentApiResponse,
    FormattedForecast,
    FormattedOneCallApiResponse,
    OneCallApiDailyForecast,
    OneCallApiHourlyForecast,
    OneCallApiResponse,
    SearchParams,
} from "./store";

export const fetchWeatherData = (infoType: string, searchParams: SearchParams) => {
    const url = new URL(import.meta.env.VITE_BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({ ...searchParams, appid: import.meta.env.VITE_API_KEY }).toString();

    return fetch(url).then((res) => res.json());
};

export const getWeatherIcon = (code: string) => `http://openweathermap.org/img/wn/${code}@2x.png`;

export const timeFormatter = (d: number, timezone: number, local?: string) => {
    return new Date((d + timezone) * 1000).toLocaleTimeString(local, { timeZone: "UTC" });
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

export const formatForecastWeather = (data: OneCallApiResponse): FormattedOneCallApiResponse => {
    let { timezone_offset, lang, daily, hourly } = data;
    const formattedDaily = daily.slice(1, 7).map(
        (d: OneCallApiDailyForecast): FormattedForecast => ({
            id: d.dt,
            title: new Date((d.dt + timezone_offset) * 1000).toLocaleDateString(lang, { weekday: "short", timeZone: "UTC" }),
            temp: { day: d.temp.day, min: d.temp.min, max: d.temp.max },
            icon: d.weather[0].icon,
        })
    );

    const formattedHourly = hourly.slice(1, 13).map(
        (d: OneCallApiHourlyForecast): FormattedForecast => ({
            id: d.dt,
            title: new Date((d.dt + timezone_offset) * 1000).toLocaleTimeString(lang, { timeZone: "UTC", hour: "2-digit", minute: "2-digit" }),
            temp: d.temp,
            icon: d.weather[0].icon,
        })
    );

    return { daily: formattedDaily, hourly: formattedHourly };
};
