export enum ThemeType {
    light = "light",
    dark = "dark",
}

export enum UnitsType {
    metric = "metric",
    imperial = "imperial",
}

export enum LangType {
    en = "en",
    de = "de",
}

export interface UserSettings {
    lang: LangType;
    theme: ThemeType;
    units: UnitsType;
}

export interface SearchParams {
    q?: string;
    lat?: number;
    lon?: number;
    exclude?: string;
    units?: UnitsType;
    lang?: LangType;
}

export interface WeatherInfo {
    id: number;
    main: string;
    description: string;
    icon: string;
}
export interface MainInfo {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
    pressure: number;
}
export interface CurrentApiResponse {
    id: number;
    dt: number;
    timezone: number;
    coord: { lat: number; lon: number };
    main: MainInfo;
    name: string;
    sys: { country: string; sunrise: number; sunset: number };
    weather: Array<WeatherInfo>;
    wind: { speed: number };
}

export interface FormattedCurrentApiResponse {
    lat: number;
    lon: number;
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
    pressure: number;
    name: string;
    dt: number;
    timezone: number;
    country: string;
    sunrise: number;
    sunset: number;
    details: string;
    icon: string;
    speed: number;
}

export interface OneCallApiDailyForecast {
    dt: number;
    dew_point: number;
    clouds: number;
    humidity: number;
    moonrise: number;
    moonset: number;
    pressure: number;
    sunrise: number;
    sunset: number;
    weather: Array<WeatherInfo>;
    wind_speed: number;
    temp: { day: number; min: number; max: number };
}

export interface OneCallApiHourlyForecast {
    dt: number;
    clouds: number;
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    visibility: number;
    weather: Array<WeatherInfo>;
    wind_speed: number;
}

export interface OneCallApiResponse {
    lat: number;
    lon: number;
    lang: string;
    timezone: string;
    timezone_offset: number;
    daily: Array<OneCallApiDailyForecast>;
    hourly: Array<OneCallApiHourlyForecast>;
}
export interface FormattedForecast {
    id: number;
    title: string;
    temp: number | { day: number; min: number; max: number };
    icon: string;
}

export interface FormattedOneCallApiResponse {
    daily: Array<FormattedForecast>;
    hourly: Array<FormattedForecast>;
}
