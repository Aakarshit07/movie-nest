import { createBrowserRouter } from "react-router-dom";
import Browse from "./page/Browse";
import Login from "./components/Login";
import ErrorPage from "./page/ErrorPage";


export const appRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
        errorElement: <ErrorPage />
    },
    {
        path: "/browse",
        element: <Browse />,
        errorElement: <ErrorPage />
    },

])