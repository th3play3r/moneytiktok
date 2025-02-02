import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
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
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        const updateSize = () => {
            const width = window.innerWidth;
            let newSize = 1350;

            if (width < 400) newSize = 350;
            else if (width < 480) newSize = 400;
            else if (width < 768) newSize = 700;
            else if (width < 1024) newSize = 1000;

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
        <div className="tokenization-section" ref={ref}>
            <div className="token-chart">
                <motion.svg
                    viewBox={`0 0 ${svgSize} ${svgSize}`}
                    width="100%"
                    height="auto"
                    preserveAspectRatio="xMidYMid meet"
                    className="responsive-svg"
                >
                    <defs>
                        <pattern id="circlePattern" patternUnits="userSpaceOnUse" x={centerX - mainRadius} y={centerY - mainRadius} width={mainRadius * 2.5} height={mainRadius * 2.5}>
                            <image href={tiktokLogo} x="0" y="0" width={mainRadius * 2} height={mainRadius * 2} preserveAspectRatio="xMidYMid slice" />
                        </pattern>
                    </defs>

                    {/* Центральный круг */}
                    <motion.circle
                        cx={centerX}
                        cy={centerY}
                        r={mainRadius}
                        className="main-circle"
                        fill="url(#circlePattern)"
                        initial={{ scale: 0, rotate: 0 }}
                        animate={isInView ? { scale: 1, rotate: 1080 } : {}}
                        transition={{ duration: 2, ease: "easeOut" }}
                    />

                    {isInView && (
                        TOKEN_DISTRIBUTION.map((token, index) => {
                            const angle = (index / TOKEN_DISTRIBUTION.length) * Math.PI * 2;
                            const startX = centerX + Math.cos(angle) * mainRadius;
                            const startY = centerY + Math.sin(angle) * mainRadius;
                            const endX = centerX + Math.cos(angle) * (mainRadius + svgSize * 0.15);
                            const endY = centerY + Math.sin(angle) * (mainRadius + svgSize * 0.15);
                            const radiusX = svgSize * 0.07;
                            const radiusY = svgSize * 0.05;

                            return (
                                <React.Fragment key={token.name}>
                                    {/* Линия */}
                                    <motion.line
                                        x1={startX}
                                        y1={startY}
                                        x2={endX}
                                        y2={endY}
                                        className="token-line"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 1.2, delay: 2.2 }}
                                    />
                                    {/* Эллипс */}
                                    <motion.ellipse
                                        cx={endX}
                                        cy={endY}
                                        rx={radiusX}
                                        ry={radiusY}
                                        className="sub-circle"
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: 2.4 }}
                                    />
                                    <motion.text
                                        x={endX}
                                        y={endY - 15}
                                        className="token-label"
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: 2.6 }}
                                    >
                                        {token.name}
                                    </motion.text>
                                    {/* Процент */}
                                    <motion.text
                                        x={endX}
                                        y={endY + 15}
                                        className="token-percent"
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1.1 }}
                                        transition={{ duration: 0.5, delay: 2.8 }}
                                    >
                                        {token.percent}%
                                    </motion.text>
                                </React.Fragment>
                            );
                        })
                    )}
                </motion.svg>
            </div>
        </div>
    );
};

export default MainCircle;
