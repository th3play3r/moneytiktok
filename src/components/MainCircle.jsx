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
                newSize = 300;
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
    const connectionOffset = mainRadius + svgSize * 0.05;

    return (
        <div className="tokenization-section">
            <div className="token-chart">
                <svg
                    viewBox={`0 0 ${svgSize} ${svgSize}`}
                    width="100%"
                    height="auto"
                    preserveAspectRatio="xMidYMid meet"
                    className="responsive-svg"
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
                        y={centerY - 10}
                        className="main-text"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        40 000 000 000
                        <tspan x={centerX} y={centerY + 30} className="main-text">
                            МТОК
                        </tspan>
                    </motion.text>

                    {TOKEN_DISTRIBUTION.map((token, index) => {
                        const angle = ((index / TOKEN_DISTRIBUTION.length) * Math.PI * 2);
                        const radiusX = svgSize * 0.08;
                        const radiusY = svgSize * 0.06;
                        const startX = centerX + Math.cos(angle) * connectionOffset;
                        const startY = centerY + Math.sin(angle) * connectionOffset;
                        const endX = centerX + Math.cos(angle) * (connectionOffset + svgSize * 0.12);
                        const endY = centerY + Math.sin(angle) * (connectionOffset + svgSize * 0.12);

                        const labelOffset = Math.max(5, svgSize * 0.015);
                        const percentOffset = Math.max(10, svgSize * 0.025);

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
                                    y={endY - labelOffset}
                                    className="token-label"
                                >
                                    {token.name}
                                </motion.text>
                                <motion.text
                                    x={endX}
                                    y={endY + percentOffset}
                                    className="token-percent"
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
