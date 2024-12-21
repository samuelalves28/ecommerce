import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import NavbarView from "../componentes/Navbar/NavBarUI";
import ProdutoView from "./Produto/Index";
import ProdutoDetalheView from "./Produto/Upsert_Produto";
import LoginView from "./Login/Index";

const PainelView: React.FC = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginView />} />
            <Route element={<NavbarLayout />}>
                <Route path="/produto" element={<ProdutoView />} />
                <Route path="/produto/c/:id" element={<ProdutoDetalheView />} />
                <Route path="*" element={<h1>404 - Not Found</h1>} />
            </Route>
        </Routes>
    );
}

const NavbarLayout: React.FC = () => (
    <>
        <NavbarView >
            <Outlet />
        </NavbarView>
    </>
);

export default PainelView;