import React from "react";
import "./TokenInfo.css"; // Файл для стилизации

const TokenInfo = () => {
    return (
        <section className="token-info">
            <h2>Токен $MTOK</h2>
            <p>
                <strong>$MTOK</strong> — это основной токен проекта MoneyTikTok, добываемый только в официальном приложении.
                Данный токен представлен как биржевой и будет торговаться на определённых платформах!
            </p>
        </section>
    );
};

export default TokenInfo;
