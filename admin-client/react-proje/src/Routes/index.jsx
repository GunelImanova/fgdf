import AddCatagory from "../pages/Admin/AddCatagory";
import AdminLayout from "../pages/Admin/AdminLayout";
import AddProduct from "../pages/Admin/AddProduct";
import Catagories from "../pages/Admin/Catagories";
import Dashboard from "../pages/Admin/Dashboard";
import Login from "../pages/Admin/Login";
import ClientLayout from "../pages/Client/ClientLayout";
import Basket from "../pages/Client/Basket";
import ContactUs from "../pages/Client/ContactUs";
import Home from "../pages/Client/Home";
import ProductDetail from "../pages/Client/ProductDetail";
import Products from "../pages/Client/Products";
import Register from "../pages/Client/Register";

export const ROUTES = [
    //Admin Layout
    {
        path: '/admin',
        element: <AdminLayout/>,
        children: [
            {
                path: 'AddCatagory',
                element: <AddCatagory/>
            },
            {
                path: 'AddProduct',
                element: <AddProduct/>
            },
            {
                path: 'Catagories',
                element: <Catagories/>
            },
            {
                path: 'Dashboard',
                element: <Dashboard/>
            },
            {
                path: 'Login',
                element: <Login/>
            },
            {
                path: 'Messages',
                element: <Messages/>
            },
            {
                path: 'Orders',
                element: <Orders/>
            },

            {
                path: 'Products',
                element: <Products/>
            },
            {
                path: 'Users',
                element: <Users/>
            }
        ]
    },
  //Client Layout
  {
    path: '',
    element: <ClientLayout/>,
    children: [
        {
            path: 'Basket',
            element: <Basket/>
        },
      
        {
            path: 'ContactUs',
            element: <ContactUs/>
        },
        {
            path: 'Home',
            element: <Home/>
        },
        {
            path: 'Login',
            element: <Login/>
        },
        {
            path: 'ProductDetail',
            element: <ProductDetail/>
        },
        {
            path: 'Products',
            element: <Products/>
        },
        {
            path: 'Register',
            element: <Register/>
        },
    ]
},
];