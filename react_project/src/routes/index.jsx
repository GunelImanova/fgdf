import AddCountry from "../pages/Admin/AddCountry";
import AdminLayout from "../pages/Admin/AdminLayout";
import Countries from "../pages/Admin/Countries";
import CountryDetail from "../pages/Admin/CountryDetail";
import Dashboard from "../pages/Admin/Dashboard";
import About from "../pages/Cilent/About";
import ClientLayout from "../pages/Cilent/ClientLayout";
import Contact from "../pages/Cilent/Contact";
import Home from "../pages/Cilent/Home";
import Countries from "../pages/Cilent/Countries";
import CountryDetail from "../pages/Cilent/CountryDetail";








export const ROUTES = [
    //Admin Layout
    {
        path: '/admin',
        element: <AdminLayout/>,
        children: [
            {
               path: 'Dashboard',
                element: <Dashboard/>
            },
            {
                path: 'AddCountry',
                element: <AddCountry/>
            },
            {
                path: 'Countries',
                element: <Countries/>
            },
            {
                path: 'CountryDetail',
                element: <CountryDetail/>
            }
        ]
    },
    //Client Layout
    {
        path: '',
        element: <ClientLayout/>,
        children: [
            {
                path: 'Home',
                element: <Home/>
            },
            {
                path: 'About',
                element: <About/>
            },
            {
                path: 'Contact',
                element: <Contact/>
            },
            {
                path: 'Countries',
                element: <Countries/>
            },
            {
                path: 'CountryDetail',
                element: <CountryDetail/>
            }
        ]
    },
];