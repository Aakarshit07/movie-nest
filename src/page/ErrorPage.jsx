import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const err = useRouteError();
    console.log(err);
    return (   
        <div className="text-center mx-auto my-4 text-2xl font-serif font-bold">
            <h1>Ooops! {err.status} {err.statusText}</h1>
            <h1>{err.error}</h1>
        </div>
    )
}

export default ErrorPage;