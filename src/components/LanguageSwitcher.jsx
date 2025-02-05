import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe } from "lucide-react";
import "./LanguageSwitcher.css";

const LanguageSwitcher = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [language, setLanguage] = useState("en"); // Английский по умолчанию

    useEffect(() => {
        const savedLang = localStorage.getItem("language");
        if (savedLang) setLanguage(savedLang);
    }, []);

    const changeLanguage = (lang) => {
        setLanguage(lang);
        localStorage.setItem("language", lang);
        setIsOpen(false);
        window.location.reload();
    };

    return (
        <div className="language-switcher">
            {/* Кнопка переключения языков */}
            <motion.button
                className="lang-button"
                onClick={() => setIsOpen(!isOpen)}
                whileTap={{ scale: 0.9 }}
            >
                <Globe size={24} />
            </motion.button>

            {/* Окно выбора языка */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="lang-menu"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                    >
                        <button onClick={() => changeLanguage("en")} className={language === "en" ? "active" : ""}>English</button>
                        <button onClick={() => changeLanguage("ru")} className={language === "ru" ? "active" : ""}>Русский</button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default LanguageSwitcher;
