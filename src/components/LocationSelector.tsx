import { useState } from "react";
import { useTranslation } from "react-i18next";

import { MagnifyingGlassIcon, MapPinIcon } from "./styled/icons";

export interface LocationSelectorProps {
    setQuery: Function;
}

const LocationSelector = ({ setQuery }: LocationSelectorProps) => {
    const [city, setCity] = useState("");
    const { t } = useTranslation();

    const handleSearch = () => {
        if (city !== "") {
            setQuery({ q: city });
            setCity("");
        }
    };

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;
                setCity("");
                setQuery({ lat, lon });
            });
        }
    };

    return (
        <>
            <input
                id="search-input"
                value={city}
                onChange={(e) => {
                    setCity(e.target.value);
                }}
                onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
                    if (e.key === "Enter") {
                        handleSearch();
                    }
                }}
                type="text"
                className="w-full rounded-md p-2 text-xl font-light shadow-xl focus:outline-none"
                placeholder={t("search_placeholder")}
            />
            <MagnifyingGlassIcon onClick={handleSearch} />
            <MapPinIcon onClick={handleLocationClick} />
        </>
    );
};

export default LocationSelector;
