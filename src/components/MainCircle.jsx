import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./MainCircle.css";
import tiktokLogo from "/assets/tiktok-logo.png";

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
    const [svgSize, setSvgSize] = useState(1350);

    useEffect(() => {
        const updateSize = () => {
            const width = window.innerWidth;
            let newSize = 1350;

            if (width < 400) {
                newSize = 350;
            } else if (width < 480) {
                newSize = 400;
            } else if (width < 768) {
                newSize = 700;
            } else if (width < 1024) {
                newSize = 1000;
            }

            setSvgSize(newSize);
            document.documentElement.style.setProperty('--svg-size', `${newSize}px`);
            document.documentElement.style.setProperty('--main-circle-radius', `${newSize * 0.2}px`);
        };

        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    const centerX = svgSize / 2;
    const centerY = svgSize / 2;
    const mainRadius = svgSize * 0.15;

    return (
        <div className="tokenization-section">
            <div className="token-chart">
                <motion.svg
                    viewBox={`0 0 ${svgSize} ${svgSize}`}
                    width="100%"
                    height="auto"
                    preserveAspectRatio="xMidYMid meet"
                    className="responsive-svg"
                    animate={{
                        rotate: 360, // Ротация по оси
                    }}
                    transition={{
                        duration: 20, // Длительность одного оборота
                        repeat: Infinity, // Бесконечное повторение
                        ease: "linear", // Линейная скорость
                    }}
                >
                    <defs>
                        <radialGradient id="mainGradient" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#444" />
                            <stop offset="100%" stopColor="#111" />
                        </radialGradient>
                        <filter id="shadow">
                            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#444" />
                        </filter>

                        <pattern
                            id="circlePattern"
                            patternUnits="userSpaceOnUse"
                            x={centerX - mainRadius}
                            y={centerY - mainRadius}
                            width={mainRadius * 2.5}
                            height={mainRadius * 2.5}
                        >
                            <image
                                href={tiktokLogo}
                                x="0"
                                y="0"
                                width={mainRadius * 2}
                                height={mainRadius * 2}
                                preserveAspectRatio="xMidYMid slice"
                            />
                        </pattern>
                    </defs>

                    {/* Центральный круг не вращается */}
                    <motion.circle
                        cx={centerX}
                        cy={centerY}
                        r={mainRadius}
                        className="main-circle"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6 }}
                        fill="url(#circlePattern)"
                    />

                    <motion.text
                        x={centerX}
                        y={`${centerY - centerY * 0.05}`} // Смещение текста на 5%
                        className="main-text"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        textAnchor="middle"
                    >
                        <tspan>40 млрд</tspan>
                    </motion.text>

                    <motion.text
                        x={centerX}
                        y={`${centerY + centerY * 0.05}`} // То же для нижнего текста
                        className="main-text"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        textAnchor="middle"
                    >
                        <tspan>$МТОК</tspan>
                    </motion.text>

                    {TOKEN_DISTRIBUTION.map((token, index) => {
                        const angle = ((index / TOKEN_DISTRIBUTION.length) * Math.PI * 2);

                        // Стартовые координаты — граница главного круга
                        const startX = centerX + Math.cos(angle) * mainRadius;
                        const startY = centerY + Math.sin(angle) * mainRadius;

                        // Конечные координаты — отступаем дальше
                        const endX = centerX + Math.cos(angle) * (mainRadius + svgSize * 0.15);
                        const endY = centerY + Math.sin(angle) * (mainRadius + svgSize * 0.15);

                        // Уменьшаем размеры маленьких кругов
                        const radiusX = svgSize * 0.07;  // Можно уменьшить до 5% от размера экрана
                        const radiusY = svgSize * 0.05;  // Или до 4%

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
                                {/* Маленький круг, не вращающийся */}
                                <motion.ellipse
                                    cx={endX}
                                    cy={endY}
                                    rx={radiusX}  // Уменьшенный радиус по X
                                    ry={radiusY}  // Уменьшенный радиус по Y
                                    className="sub-circle"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                />
                                {/* Текст, не вращающийся */}
                                <motion.text
                                    x={endX}
                                    y={endY - Math.max(5, svgSize * 0.015)}
                                    className="token-label"
                                >
                                    {token.name}
                                </motion.text>
                                <motion.text
                                    x={endX}
                                    y={endY + Math.max(10, svgSize * 0.025)}
                                    className="token-percent"
                                >
                                    {token.percent}%
                                </motion.text>
                            </React.Fragment>
                        );
                    })}

                </motion.svg>
            </div>
        </div>
    );
};

export default MainCircle;
