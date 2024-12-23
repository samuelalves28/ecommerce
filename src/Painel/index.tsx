import React from "react";
import { Routes, Route } from "react-router-dom";
import ProdutoView from "./Produto/Index";
import ProdutoDetalheView from "./Produto/Upsert_Produto";
import LoginView from "./Login/Index";
import NavbarLayout from "../componentes/Navbar/NavBarLayou";

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


export default PainelView;