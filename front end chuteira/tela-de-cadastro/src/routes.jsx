import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ListBoot from "./pages/Home/ListUsers";
import EditBoot from "./pages/Home/EditBoot";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },

    {
        path: "/list-boots",
        element: <ListBoot />
    },

    {
        path: "/edit/:id",
        element: <EditBoot/>
    }

])

export default router;