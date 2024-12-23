import React from "react";
import { Outlet } from "react-router-dom";
import NavBarView from "./NavBarUI";

const NavbarLayout: React.FC = () => (
    <>
        <NavBarView >
            <Outlet />
        </NavBarView>
    </>
);

export default NavbarLayout;