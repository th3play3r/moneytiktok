import React, { useState } from 'react';
import './Instructions.css';

const Instructions = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

    const openModal = (image) => {
        setCurrentImage(image);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setCurrentImage('');
    };

    return (
        <div>
            <h2>Как играть?</h2>
            <div id="instructions" className="instructions-section">
                <div className="instruction-step" onClick={() => openModal('/assets/start-bot.png')}>
                    <img src="/assets/start-bot.png" alt="Старт в боте" className="instruction-img" />
                    <div className="instruction-text">
                        <h3>Шаг 1: Нажмите /start</h3>
                        <p>Запустите бота <strong>@MoneyTikTok</strong> в Telegram и нажмите команду <code>/start</code>.</p>
                    </div>
                </div>

                <div className="arrow">→</div>
                <div className="instruction-step" onClick={() => openModal('/assets/get-mtok.png')}>
                    <img src="/assets/get-mtok.png" alt="Получение MTOK" className="instruction-img" />
                    <div className="instruction-text">
                        <h3>Шаг 2: Получите MTOK</h3>
                        <p>Нажмите <strong>большую кнопку с логотипом TikTok</strong>, чтобы начать получать MTOK. Дождитесь 5 минут.</p>
                    </div>
                </div>

                <div className="arrow">→</div>
                <div className="instruction-step" onClick={() => openModal('/assets/switch-tab.png')}>
                    <img src="/assets/switch-tab.png" alt="Переключение вкладки" className="instruction-img" />
                    <div className="instruction-text">
                        <h3>Шаг 3: Переключите вкладку</h3>
                        <p>Внизу экрана выберите <strong>следующую вкладку</strong> для продолжения работы с MTOK.</p>
                    </div>
                </div>

                <div className="arrow">→</div>
                <div className="instruction-step" onClick={() => openModal('/assets/exchange.png')}>
                    <img src="/assets/exchange.png" alt="Выбор обменника" className="instruction-img" />
                    <div className="instruction-text">
                        <h3>Шаг 4: Выберите обменник</h3>
                        <p>Перейдите в раздел <strong>обменника</strong>, чтобы конвертировать MTOK в лайки или TON.</p>
                    </div>
                </div>

                <div className="instruction-note">
                    Наслаждайтесь игрой и зарабатывайте!
                </div>

                {isOpen && (
                    <div className="lightbox" onClick={closeModal}>
                        <div className="lightbox-content">
                            <img src={currentImage} alt="Большое изображение" className="lightbox-img" />
                            <button className="lightbox-close" onClick={closeModal}>×</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Instructions;
