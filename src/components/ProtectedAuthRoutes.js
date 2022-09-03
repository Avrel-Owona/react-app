import React from 'react';
import {Navigate, Outlet} from "react-router-dom";

const ProtectedAuthRoutes = () => {

    if (localStorage.firstName) {
        return <Navigate to='/'/>
    }
    // Outlet nous permet rendre les elements de routes enfant,
    // Ça permets à l'interface imbriqué de s'afficher
    return <Outlet/>;
};

export default ProtectedAuthRoutes;