import React, { useState } from 'react';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js';
import './Home.css';
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
        <div className="home-container">
            {/* Приветственный блок */}
            <WelcomeSection />

            {/* Информация о токене */}
            <TokenInfo />

            {/* Главный круг */}
            <h4>Токеномика $MTOK:</h4>
            <MainCircle />

            {/* Инструкция блок */}
            <Instructions />

            {/* Дорожная карта блок */}
            <RoadmapSection />
        </div>

    );
};

export default Home;
