import React from 'react';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import MainCircle from './MainCircle.jsx';
import Instructions from './Instructions.jsx';
import WelcomeSection from './WelcomeSection.jsx';
import RoadmapSection from './RoadmapSection.jsx';
import TokenInfo from './TokenInfo.jsx';
import Layout from './Layout.jsx';
import LanguageSwitcher from './LanguageSwitcher.jsx';
import { useTranslation } from "react-i18next";

// Регистрация компонентов Chart.js
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

const Home = () => {
    const { t } = useTranslation();

    return (
        <div className="container" style={{ marginTop: '70px' }}>
            {/* Навигационная панель */}
            <Layout />

            {/* Приветственный блок */}
            <div className="row">
                <div className="col-12">
                    <WelcomeSection />
                </div>
            </div>

            {/* Информация о токене */}
            <div className="row mt-4">
                <div className="col-12">
                    <TokenInfo />
                </div>
            </div>

            {/* Главный круг (график) */}
            <div className="row text-center mt-5">
                <div className="col-12">
                    <h4 className="text-warning text-uppercase fw-bold tokenomics-heading">{t("Tokenomic")}</h4>
                </div>
                <div class="w-100 d-flex justify-content-center align-items-center">
                    <MainCircle />
                </div>
            </div>

            {/* Инструкция */}
            <div className="row mt-5">
                <div className="col-12">
                    <Instructions />
                </div>
            </div>

            {/* Дорожная карта */}
            <div className="row mt-5">
                <div className="col-12">
                    <RoadmapSection />
                </div>
            </div>

            {/* Дорожная карта */}
            <div className="row mt-5">
                <div className="col-12">
                    <LanguageSwitcher />
                </div>
            </div>


        </div>
    );
};

export default Home;
