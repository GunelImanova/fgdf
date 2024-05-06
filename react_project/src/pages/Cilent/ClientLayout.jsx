import ClientNavbar from '../../conponents/ClientNavbar'
import { Outlet } from "react-router-dom";

const ClientLayout = () => {
  
  return (
    <>
        <ClientNavbar />
        <Outlet />
    </>
  );
};

export default ClientLayout;