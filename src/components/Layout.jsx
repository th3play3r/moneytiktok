// Layout.jsx
import React from 'react';
import { Navbar, Button } from 'react-bootstrap'; // Импортируем необходимые компоненты из react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Подключаем стили Bootstrap
import "./Layout.css";
import { useTranslation } from "react-i18next";

const Layout = () => {
    const { t } = useTranslation();

    return (
        <Navbar fixed="top"> {/* Используем fixed="top" для фиксации панели */}
            <Navbar.Brand className="navbar-logo" >MoneyTikTok</Navbar.Brand>
            <div className="ml-auto">
                <Button
                    variant="outline-light"
                    onClick={() => window.location.href = "https://t.me/MoneyTikTokCoin_bot"} // Укажи нужный URL
                >
                    {t("Play")}
                </Button>
            </div>
        </Navbar>
    );
};

export default Layout;
