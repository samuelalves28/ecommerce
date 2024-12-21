import React from "react";
import { Routes, Route } from "react-router-dom";
import NavbarView from "../componentes/Navbar/NavBar";
import Dashboard from "./Produto/Index";

const PainelView: React.FC = () => {
    return (
        <>
            <NavbarView />
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="*" element={<h1>404 - Not Found</h1>} />
            </Routes>
        </>
    );
}

export default PainelView;