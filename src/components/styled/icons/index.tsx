import { MagnifyingGlassIcon as MagnifyingGlassIconBase, MapPinIcon as MapPinIconBase, MoonIcon as MoonIconBase, SunIcon as SunIconBase } from "@heroicons/react/24/solid";
import { Themes } from "../../../utils/types";

export const SunIcon = ({ theme }: { theme: Themes }) => (
    <SunIconBase className={`h-8 w-8 cursor-pointer rounded-md p-1 text-colors-primary transition ease-out hover:scale-125 ${theme === Themes.light ? "bg-background-secondary" : ""}`} />
);

export const MoonIcon = ({ theme }: { theme: Themes }) => (
    <MoonIconBase className={`h-8 w-8 cursor-pointer rounded-md p-1 text-colors-primary transition ease-out hover:scale-125 ${theme === Themes.dark ? "bg-background-secondary" : ""}`} />
);

export const MagnifyingGlassIcon = (props: { onClick: any }) => <MagnifyingGlassIconBase {...props} className="h-6 w-6 cursor-pointer text-colors-primary transition ease-out hover:scale-125" />;

export const MapPinIcon = (props: any) => <MapPinIconBase {...props} className="h-6 w-6 cursor-pointer text-colors-primary transition ease-out hover:scale-125" />;
