import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Navigation from "../components/nav";
import Footer from "../components/footer";
import {ReactComponent as Logo} from '../assets/icons/logo.svg';

const Root = () => {
    const theme = useSelector((state) => state.theme.dark);

    return (
        <div className={theme ? 'dark-theme' : 'light-theme'}>
            <header>
                <a href='/' className="title">
                    <Logo className="logo" />
                    <h1>Soomin<br/>Chung</h1>
                </a>
                <Navigation />
            </header>

            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default Root;