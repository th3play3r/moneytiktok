import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./MainCircle.css";
import tiktokLogo from "/assets/tiktok-logo.png";
import { useTranslation } from "react-i18next";



const MainCircle = () => {
    const { t } = useTranslation();
    const TOKEN_DISTRIBUTION = [

        { name: t("TK1"), percent: 65 },
        { name: t("TK2"), percent: 3.5 },
        { name: t("TK3"), percent: 1 },
        { name: t("TK4"), percent: 5 },
        { name: t("TK5"), percent: 4 },
        { name: t("TK6"), percent: 14 },
        { name: t("TK7"), percent: 7.5 }
    ];
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

                    <motion.g
                        initial={{ scale: 0, rotate: 0 }}
                        animate={isInView ? { scale: 1, rotate: 360 } : {}}
                        transition={{ duration: 1, ease: "easeOut" }}
                        style={{ transformOrigin: `${centerX}px ${centerY}px` }} // Вращение вокруг центра
                    >
                        <motion.text
                            x={centerX}
                            y={centerY - svgSize * 0.02} // Меньший радиус
                            className="main-text"
                            textAnchor="middle"
                            fill="white"
                            fontSize="1.2em"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                        >
                            <tspan>{t("B")}</tspan>
                        </motion.text>

                        <motion.text
                            x={centerX}
                            y={centerY + svgSize * 0.03} // Тоже ближе к центру
                            className="main-text"
                            textAnchor="middle"
                            fontSize="1.2em"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                        >
                            <tspan>$МТОК</tspan>
                        </motion.text>
                    </motion.g>



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
                                        animate={{ opacity: 1, scale: 1.3 }}
                                        transition={{ duration: 0.5, delay: 2.4 }}
                                    />
                                    <motion.text
                                        x={endX}
                                        y={endY - svgSize * 0.015} // Динамический верхний отступ
                                        className="token-label"
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: 2.6 }}
                                    >
                                        {token.name}
                                    </motion.text>

                                    <motion.text
                                        x={endX}
                                        y={endY + svgSize * 0.015} // Динамический нижний отступ
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
