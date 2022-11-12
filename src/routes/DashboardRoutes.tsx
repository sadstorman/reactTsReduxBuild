import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { Home } from '../pages/Home';

export const DashboardRoutes = () => {
    return (
        <>
            {/* <Navbar /> */}
            <Routes>
                <Route path='home' element={<Home />} />

                <Route path='/*' element={<Navigate to="/home" />} />
            </Routes>
        </>
    )
}
