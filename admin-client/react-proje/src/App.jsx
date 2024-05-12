import { useState } from 'react'
import './App.css'
import AdminNavbar from "./conponents/Admin/AdminNavbar.jsx"
import ClientNavbar from "./conponents/Client/ClientNavbar"
function App() {
  return (
    <>
     <ClientNavbar />
   <AdminNavbar/>
    </>
  );
}

export default App;

