export const BodyText = ({ children, bold = false }: { children: string | React.ReactElement; bold?: boolean }) => <p className={`font-${bold ? "medium" : "normal"}`}>{children}</p>;

export const BodyTextSmall = ({ children, bold = false }: { children: string | React.ReactElement; bold?: boolean }) => <p className={`text-sm font-${bold ? "medium" : "light"}`}>{children}</p>;

export const CapitalText = ({ children }: { children: string | React.ReactElement }) => <p className="font-medium uppercase text-colors-primary">{children}</p>;

export const TextXL = ({ children, light = false, ...props }: { children: string | React.ReactElement; light?: boolean }) => (
    <p {...props} className={`text-center text-xl font-${light ? "extralight" : "normal capitalize"} text-colors-primary`}>
        {children}
    </p>
);

export const Text3XL = ({ children, ...props }: { children: string | React.ReactElement }) => (
    <p {...props} className="text-3xl font-medium text-colors-primary">
        {children}
    </p>
);

export const Text5XL = ({ children, ...props }: { children: string | React.ReactElement }) => (
    <p {...props} className="text-5xl font-medium text-colors-primary">
        {children}
    </p>
);
