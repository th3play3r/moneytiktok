import React from "react";
import "./WelcomeSection.css"; // Подключаем стили

const WelcomeSection = () => {
    const scrollToInstructions = () => {
        document.getElementById("instructions")?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <section className="welcome-section">
            <h1>Добро пожаловать в MoneyTikTok!</h1>
            <p>
                Это простое и увлекательное мини-приложение, которое поможет вам
                лучше понять основы взаимодействия с криптовалютами. Нажмите кнопку ниже,
                чтобы узнать, как играть.
            </p>
            <button className="scroll-button" onClick={scrollToInstructions}>
                Как играть
            </button>
        </section>
    );
};

export default WelcomeSection;
