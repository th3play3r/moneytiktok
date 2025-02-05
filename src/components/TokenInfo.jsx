import React from "react";
import "./TokenInfo.css"; // Файл для стилизации
import { useTranslation } from "react-i18next";

const TokenInfo = () => {
    const { t } = useTranslation();
    return (
        <section className="token-info">
            <h2>{t("Token")}</h2>
            <p>
                <strong>$MTOK</strong> {t("Info")}
            </p>
        </section>
    );
};

export default TokenInfo;
