import { createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Resume from "./pages/Resume";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Header />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/projects', element: <Projects /> },
            { path: '/resume', element: <Resume /> }
        ]
    }
])

export default router