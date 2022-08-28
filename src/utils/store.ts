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
