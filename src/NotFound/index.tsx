import { Routes } from "react-router-dom";
import styled from "./index.module.css";

const NotFoundView = () => {
    return (
        <section className={styled.homeSection}>
            <div className={styled.homeContainer}>
                <Routes>
                </Routes>
            </div>
        </section>)
}

export default NotFoundView;