import React from 'react';
import {Navigate, Outlet} from "react-router-dom";

const ProtectedRoutes = () => {

    if (!localStorage.firstName) {
        return <Navigate to='/login'/>
    }
    // Outlet nous permet rendre les elements de routes enfant,
    // Ça permets à l'interface imbriqué de s'afficher
    return <Outlet/>;
};

export default ProtectedRoutes;