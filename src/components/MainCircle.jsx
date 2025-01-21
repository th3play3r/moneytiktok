import React from "react";
import { motion } from "framer-motion";
import "./MainCircle.css"; // Подключаем стили
import tiktokLogo from "/assets/tiktok-logo.png"; // Путь к изображению TikTok

const TOKEN_DISTRIBUTION = [
    { name: "Майнеры", percent: 65 },
    { name: "Амбассадоры", percent: 3.5 },
    { name: "Команда", percent: 1 },
    { name: "Предпродажа", percent: 5 },
    { name: "Проект", percent: 4 },
    { name: "Ликвидность", percent: 14 },
    { name: "Маркетинг", percent: 7.5 }
];

const MainCircle = () => {
    const centerX = 675;
    const centerY = 675;
    const mainRadius = 180;
    const connectionOffset = mainRadius + 8;

    return (
        <div className="tokenization-section">
            <div className="token-chart">
                <svg viewBox="0 0 1350 1350" className="responsive-svg">
                    <defs>
                        <radialGradient id="mainGradient" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#333" />
                            <stop offset="100%" stopColor="black" />
                        </radialGradient>
                        <radialGradient id="subGradient" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#333" />
                            <stop offset="100%" stopColor="black" />
                        </radialGradient>
                        <filter id="shadow">
                            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#666" />
                        </filter>
                    </defs>

                    <motion.circle
                        cx={centerX}
                        cy={centerY}
                        r={mainRadius}
                        className="main-circle"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6 }}
                    />

                    <image
                        href={tiktokLogo}
                        x={centerX - mainRadius * 0.95}  // Центрируем по оси X с учетом ширины
                        y={centerY - mainRadius * 0.95}  // Центрируем по оси Y с учетом высоты
                        width={mainRadius * 1.9}         // Ширина картинки остается 1.9 от радиуса
                        height={mainRadius * 1.9}        // Высота картинки остается 1.9 от радиуса
                        className="main-image"
                    />

                    <motion.text
                        x={centerX}
                        y={centerY - 10}  /* Немного сдвигаем для лучшего выравнивания */
                        className="main-text"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        40 000 000 000
                        <tspan x={centerX} y={centerY + 30} className="main-text" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: '700' }}>
                            МТОК
                        </tspan>
                    </motion.text>

                    {/* Для остальных текстов добавьте аналогичное изменение стилей */}


                    {TOKEN_DISTRIBUTION.map((token, index) => {
                        const angle = ((index / TOKEN_DISTRIBUTION.length) * Math.PI * 2);
                        const radiusX = 130;
                        const radiusY = 110;
                        const startX = centerX + Math.cos(angle) * connectionOffset;
                        const startY = centerY + Math.sin(angle) * connectionOffset;
                        const endX = centerX + Math.cos(angle) * (connectionOffset + 150 * 1.5);
                        const endY = centerY + Math.sin(angle) * (connectionOffset + 150 * 1.5);

                        return (
                            <React.Fragment key={token.name}>
                                <motion.line
                                    x1={startX}
                                    y1={startY}
                                    x2={endX}
                                    y2={endY}
                                    className="token-line"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                />
                                <motion.ellipse
                                    cx={endX}
                                    cy={endY}
                                    rx={radiusX}
                                    ry={radiusY}
                                    className="sub-circle"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                />
                                <motion.text
                                    x={endX}
                                    y={endY}
                                    className="token-label"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.7 }}
                                >
                                    {token.name}
                                </motion.text>
                                <motion.text
                                    x={endX}
                                    y={endY + 30}
                                    className="token-percent"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.7 }}
                                >
                                    {token.percent}%
                                </motion.text>
                            </React.Fragment>
                        );
                    })}
                </svg>
            </div>
        </div>
    );
};

export default MainCircle;
