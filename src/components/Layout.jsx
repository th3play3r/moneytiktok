import React from "react";
import { Link } from "react-router-dom";
import "./Layout.css"; // Подключаем стили

const Layout = () => {
    return (
        <header className="navbar">
            <nav className="navbar-nav">
                <ul className="navbar-links">
                    <li className="navbar-logo">MoneyTikTok</li>
                </ul>
            </nav>
        </header>
    );
};

export default Layout;
