import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthProvider';

interface PrivateRouteProps {
    children?: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const auth = useAuth();

    if (!auth || !auth.isTokenValid()) {
        return <Navigate to="/painel/login" replace />;
    }

    return children ? <>{children}</> : <Outlet />;
};

export default PrivateRoute;