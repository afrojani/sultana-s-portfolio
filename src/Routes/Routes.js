import { createBrowserRouter } from "react-router-dom";
import ProjectDetail from "../components/ProjectDetail/ProjectDetail";
import Home from "../Home/Home";
import Main from "../layout/Main";

export const routes = createBrowserRouter(
    [
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/details',
                    element: <ProjectDetail></ProjectDetail>
                },
            ]
        }
    ]);