import { createBrowserRouter } from "react-router-dom";
import { ROUTER } from "./constants";
import Home from '../Pages/Home';

const router = createBrowserRouter([
    {
        path: ROUTER.HOME,
        element: <Home />,
    },
])

export default router