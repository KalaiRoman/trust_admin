import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRouter() {
    const getToken=localStorage.getItem("tr_token");
  return getToken?<Outlet/>:<Navigate to={"/"}/>
}

export default ProtectedRouter