import MainRoot from "../pages/MainRoot";
import Home from "../pages/Home"
import Add from "../pages/Add"
import NotFound from "../pages/NotFound"

export const ROUTES = [
    {
        element: <MainRoot/>,
        path: '/',
        children: [
            {
                index: true,
                element: <Home/>
            },
          
            {
                path: '*',
                element: <NotFound/>
            },
            {
                path: 'add',
                element: <Add/>
            }
        ],
    }
]