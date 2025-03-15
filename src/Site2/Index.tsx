import React from "react";
import { Route, Routes } from "react-router-dom";
import FormEncontroView from "./formEncontro/Index";

const SiteView: React.FC = () => {
    return (<Routes>
        <Route path="formEncontro" element={<FormEncontroView />} />
    </Routes>
    )
}

export default SiteView;