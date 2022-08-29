import { useEffect, useState } from "react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchWeatherData, formatCurrentCities } from "../../utils/util";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useTranslation } from "react-i18next";
import { getWeatherIcon } from "../../utils/util";
import { FormattedGroupApiResponseItem, UserSettings } from "../../utils/interfaces";
import { useCities } from "../../hooks/useCities";
import { Units } from "../../utils/types";
import { BodyText, CapitalText, Text3XL, Text5XL } from "../styled/typography";

interface SecondaryWidgetProps {
    userSettings: UserSettings;
}

const CITIES = [
    { id: 5128581, name: "New York" },
    { id: 2968815, name: "Paris" },
    { id: 2643743, name: "London" },
    { id: 1850147, name: "Tokyo" },
    { id: 3128760, name: "Barcelona" },
    { id: 292223, name: "Dubai" },
];

const cityIds = CITIES.map((city) => city.id);

function SecondaryWidget({ userSettings }: SecondaryWidgetProps) {
    const { t } = useTranslation();
    const [sliderInterval, setSliderInterval] = useState(3);
    const { isLoading, cities } = useCities({ id: cityIds.join(","), units: userSettings.units, lang: userSettings.lang });
    const unit = userSettings.units === Units.metric ? " °C" : " °F";

    if (isLoading) {
        return (
            <div className="flex w-full flex-col items-center justify-center overflow-hidden opacity-75 mt-2">
                <div className="loader mb-4 h-12 w-12 rounded-full border-4 border-t-4 border-colors-primary border-t-colors-secondary ease-linear"></div>
                <h2 className="text-center text-xl font-semibold text-colors-primary">{t("loading")}</h2>
                <p className="w-2/3 text-center text-colors-primary">{t("loading_description")}</p>
            </div>
        );
    }

    return (
        <div>
            <div className="mt-6 flex items-center justify-start">
                <CapitalText>{t("popular_destinations")}</CapitalText>
            </div>
            <hr className="my-2 border-colors-primary" />
            <BodyText>
                <>
                    {t("slider_text")}
                    <strong>{sliderInterval}s</strong>
                </>
            </BodyText>
            <input
                id="slider"
                type="range"
                min={1}
                max={10}
                value={sliderInterval}
                onChange={(e) => setSliderInterval(Number(e.target.value))}
                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-background-secondary accent-background-secondary"
            />

            <Swiper
                spaceBetween={30}
                centeredSlides
                autoplay={{
                    delay: sliderInterval * 1000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                loop
            >
                {cities.map((city: FormattedGroupApiResponseItem) => {
                    return (
                        <SwiperSlide key={city.id}>
                            <div className="flex h-96 flex-col items-center justify-around">
                                <Text3XL>{city.name}</Text3XL>
                                <img src={getWeatherIcon(city.weather[0].icon)} alt={city.name} className="rounded-md bg-background-secondary" />
                                <Text5XL>{`${city.temp.day.toFixed() + unit}`}</Text5XL>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}

export default SecondaryWidget;
