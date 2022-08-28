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
