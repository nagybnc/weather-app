# React Weather App ☁️

**Weather App** is a simple weather app developed in typescript using React, HTML and Tailwind CSS. The app allows you to see the weather from your current location or another location around the globe using **OpenWeather Api**. Using **One Call API** and **Weather API** for the current weather, 12 hours and 6 days forecast. Using **Group Api** for the 6 cities current weather information.
You can change the unit system from metric to imperial. The app is available in **light** and **dark mode**.

<img src="https://github.com/nagybnc/weather-app/blob/main/public/weather-app.png?raw=true" width="1024"/>

## Main weather widget:

Display the following for the user's location using the Geolocation API:

-   Current weather
-   Hourly forecast for the next 12 hours
-   Daily forecast for the next 6 days
-   Store the 6 days weather data and only make a new request when necessary (e.g.: a day passes)

## Secondary weather widget

The application cycles through 6 cities' current weather information.

-   The interval can be set manually for this widget

## Additional features

-   The user is able to switch between imperial or metric measurements
-   The user is able to switch between normal and dark mode
-   The UI is responsive
-   All settings are saved and re-used when the user returns to the application

## 📚 Libraries

-   [![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://github.com/facebook/react)
-   [![typescript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
-   [![tailwind-css](https://img.shields.io/badge/tailwind_css-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)

## ⚙️ Setup

Create a file called **.env** in the root of the weather-app project. Add the following code in the file.

```
VITE_BASE_URL = https://api.openweathermap.org/data/2.5
VITE_API_KEY = {YOUR_API_KEY}
```

The app is using **One Call API** from OpenWeather API. To start the project you need an **account** and **OpenWeather API Key**. You can signup and get the key from [here](https://openweathermap.org/api).

```
npm i
npm run dev
```
