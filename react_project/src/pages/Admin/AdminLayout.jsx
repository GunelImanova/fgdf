import AdminNavbar from '../../conponents/AdminNavbar/index.jsx'
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  
  return (
    <>
        <AdminNavbar />
        <Outlet />
    </>
  );
};

export default AdminLayout;