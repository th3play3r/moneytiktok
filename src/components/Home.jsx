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

// Регистрация компонентов Chart.js
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

const Home = () => {
    return (
        <div className="container">
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
                    <h4 className="text-warning text-uppercase fw-bold">Токеномика $MTOK:</h4>
                </div>
                <div className="col-12 col-md-8 offset-md-2">
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
        </div>
    );
};

export default Home;
