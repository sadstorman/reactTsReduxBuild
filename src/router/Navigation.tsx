import { useEffect } from "react";

import { Navigate, Route, Routes } from "react-router-dom";

import { DashboardRoutes } from "../routes/DashboardRoutes";

export const Navigation = () => {

    const status = 'authenticated'

    // if (status === 'checking') {
    //     return <CheckingAuth />
    // }

    return (
        <Routes>
            {
                status === 'authenticated'
                    ? <Route path="/*" element={<DashboardRoutes />} />
                    : ''
                    // : <Route path="/auth/*" element={<AuthRoutes />} />
            }
            <Route path="/*" element={<Navigate to={'/auth/login'} />} />
        </Routes>

    )
}
