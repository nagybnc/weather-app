import { SwitchButtonTypes } from "../../utils/types";

export interface SwitchButtonItem {
    id: string;
    value: string | React.ReactNode;
}

export interface SwitchButtonProps {
    items: Array<SwitchButtonItem>;
    onChange: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    selectedId: string;
    type: SwitchButtonTypes;
}

const SwitchButton = ({ items = [], onChange, selectedId }: SwitchButtonProps) => {
    return (
        <div className="flex flex-row items-center justify-center">
            {items.map(({ id, value }: SwitchButtonItem, idx) => (
                <span key={id}>
                    <button
                        key={id}
                        name={id}
                        className={`rounded-md p-1 text-xl font-light text-colors-primary transition ease-out hover:scale-125 ${id === selectedId ? "bg-background-secondary" : ""}`}
                        onClick={onChange}
                    >
                        {value}
                    </button>
                    {idx < items.length - 1 && <span className="mx-1 text-xl text-colors-primary">/</span>}
                </span>
            ))}
        </div>
    );
};

export default SwitchButton;
