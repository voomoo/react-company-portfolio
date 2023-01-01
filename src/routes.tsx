import {useRoutes} from "react-router-dom";
import Layout from "./components/Layout/Layout";

export default function Routes() {
    return (
        useRoutes([
            {
                path: "/",
                element: <Layout/>,
                children: [
                    {
                        path: "",
                        element: <div>Home</div>
                    }
                ]
            }
        ])
    )
}