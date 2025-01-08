import React from "react";
import { Routes, Route } from "react-router-dom";
import DashBoardView from "./DashBoard/Index";
import ProdutoView from "./Produto/Index";
import ProdutoDetalheView from "./Produto/Upsert_Produto";
import LoginView from "./Login/Index";
import NavbarLayout from "../componentes/Navbar/NavBarLayou";
import AuthProvider from "./AuthProvider";
import PrivateRoute from "./PrivateRoute";
import MonitorRoute from "./Monitoramento/Index"

const PainelView: React.FC = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/login" element={<LoginView />} />
                <Route element={<PrivateRoute />}>
                    <Route element={<NavbarLayout />}>
                        <Route path="dashboard" element={<DashBoardView />} />
                        <Route path="Monitor" element={<MonitorRoute />} />
                        <Route path="produto" element={<ProdutoView />} />
                        <Route path="produto/c/:id" element={<ProdutoDetalheView />} />
                        <Route path="*" element={<h1>404 - Not Found</h1>} />
                    </Route>
                </Route>
            </Routes>
        </AuthProvider>
    );
};

export default PainelView;