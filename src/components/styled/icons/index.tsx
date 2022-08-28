import { MagnifyingGlassIcon as MagnifyingGlassIconBase, MapPinIcon as MapPinIconBase, MoonIcon as MoonIconBase, SunIcon as SunIconBase } from "@heroicons/react/24/solid";
import { Themes } from "../../../utils/types";

export const SunIcon = () => <SunIconBase className={`h-6 w-6 cursor-pointer rounded-md p-1 text-colors-primary transition ease-out hover:scale-125`} />;

export const MoonIcon = () => <MoonIconBase className={`h-6 w-6 cursor-pointer rounded-md p-1 text-colors-primary transition ease-out hover:scale-125}`} />;

export const MagnifyingGlassIcon = (props: { onClick: any }) => <MagnifyingGlassIconBase {...props} className="h-6 w-6 cursor-pointer text-colors-primary transition ease-out hover:scale-125" />;

export const MapPinIcon = (props: any) => <MapPinIconBase {...props} className="h-6 w-6 cursor-pointer text-colors-primary transition ease-out hover:scale-125" />;
