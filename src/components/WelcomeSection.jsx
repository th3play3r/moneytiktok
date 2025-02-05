import React from "react";
import "./WelcomeSection.css"; // Подключаем стили
import { useTranslation } from "react-i18next";

const WelcomeSection = () => {
    const { t } = useTranslation();
    const scrollToInstructions = () => {
        document.getElementById("instructions")?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <section className="welcome-section">
            <h1>{t("Hello")}</h1>
            <p>
                {t("SubHello")}
            </p>
            <button className="scroll-button" onClick={scrollToInstructions}>
                {t("HTP")}
            </button>
        </section>
    );
};

export default WelcomeSection;
