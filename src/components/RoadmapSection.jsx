import React from "react";
import "./RoadmapSection.css"; // Подключаем стили

const roadmapData = [
    { title: "Запуск миниап", status: "completed", position: "10%" },
    { title: "Набор аудитории", status: "in-progress", position: "30%" },
    { title: "Поиск партнёров", status: "in-progress", position: "50%" },
    { title: "Присейл токена", status: "future", position: "70%" },
    { title: "Доступ к майнингу и аирдроп", status: "future", position: "90%" }
];

const RoadmapSection = () => {
    return (
        <div className="roadmap-section">
            <h2>Дорожная карта</h2>
            <div className="roadmap-line">
                {roadmapData.map((step, index) => (
                    <React.Fragment key={index}>
                        {/* Точка на линии */}
                        <div
                            className={`roadmap-step ${step.status}`}
                            style={{ left: step.position }}
                        >
                            {/* Стикер в зависимости от статуса */}
                            <div className="roadmap-sticker" style={{ left: step.position }}>
                                {step.status === "completed" && <i className="fas fa-check"></i>}
                                {step.status === "in-progress" && <i className="fas fa-clock"></i>}
                                {step.status === "future" && <i className="fas fa-hourglass-start"></i>}
                            </div>
                            {/* Подпись */}
                            <div className="roadmap-label" style={{ left: step.position }}>
                                {step.title}
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>);
};

export default RoadmapSection;



