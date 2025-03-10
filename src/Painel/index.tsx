import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthProvider from "./AuthProvider";
import LoginView from "./Login/Index";
import PrivateRoute from "./PrivateRoute";
import NavbarLayout from "../componentes/Navbar/NavBarLayou";


const PainelView: React.FC = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/login" element={<LoginView />} />
                <Route element={<PrivateRoute />}>
                    <Route element={<NavbarLayout />}>
                        {/* <Route path="dashboard" element={<DashBoardView />} />
                        <Route path="Monitor" element={<MonitorRoute />} />
                        <Route path="produto" element={<ProdutoView />} />
                        <Route path="produto/c/:id" element={<ProdutoDetalheView />} /> */}
                        <Route path="*" element={<h1>404 - Not Found</h1>} />
                    </Route>
                </Route>
            </Routes>
        </AuthProvider>
    );
};

export default PainelView;