interface ErrorProps {
    error: Error;
}

export const Error = ({ error }: ErrorProps) => {
    return (
        <div>
            <div className="text-3xl text-colors-primary">Error</div>
            <div className="text-xl text-colors-primary">{error.message}</div>
        </div>
    );
};

export const ErrorHandler = (error: Error) => {
    console.error(error);
};
