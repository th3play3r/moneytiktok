import React from "react";
import "./RoadmapSection.css"; // Подключаем стили
import 'bootstrap/dist/css/bootstrap.min.css'; // Подключаем стили Bootstrap
import { useTranslation } from "react-i18next";

const stickers = document.querySelectorAll('.roadmap-sticker');

stickers.forEach(sticker => {
    const delay = Math.random() * 2 + 's'; // Случайная задержка от 0 до 2 секунд
    sticker.style.animationDelay = delay;
});

const RoadmapSection = () => {
    const { t } = useTranslation();
    const roadmapData = [
        { title: t("RM1"), status: "completed", position: "10%" },
        { title: t("RM2"), status: "in-progress", position: "30%" },
        { title: t("RM3"), status: "in-progress", position: "50%" },
        { title: t("RM4"), status: "future", position: "70%" },
        { title: t("RM5"), status: "future", position: "90%" }
    ];

    return (
        <div className="roadmap-section container">
            <h2 className="text-center mb-4">{t("RoadMapLabel")}</h2>
            <div className="roadmap-line position-relative">
                {roadmapData.map((step, index) => (
                    <React.Fragment key={index}>
                        {/* Точка на линии */}
                        <div
                            className={`roadmap-step ${step.status} position-absolute`}
                            style={{ left: step.position }}
                        >
                            {/* Стикер в зависимости от статуса */}
                            <div className="roadmap-sticker position-absolute" style={{ left: step.position }}>
                                {step.status === "completed" && <i className="fas fa-check"></i>}
                                {step.status === "in-progress" && <i className="fas fa-clock"></i>}
                                {step.status === "future" && <i className="fas fa-hourglass-start"></i>}
                            </div>
                            {/* Подпись с уменьшением размера шрифта и меньшими отступами */}
                            <div className="roadmap-label position-absolute">
                                {step.title}
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default RoadmapSection;
