import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
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
        <Container>
            <h2 className="text-center">Как играть?</h2>
            <div id="instructions" className="instructions-section">
                <Row className="justify-content-center">
                    {/* Указываем что на XL - 4 в ряд, на MD и SM - 2 в ряд */}
                    <Col xs={12} md={6} lg={3} className="mb-4">
                        <div className="instruction-step" onClick={() => openModal('/assets/start-bot.png')}>
                            <img src="/assets/start-bot.png" alt="Старт в боте" className="instruction-img" />
                            <div className="instruction-text">
                                <h3>Шаг 1: Нажмите /start</h3>
                                <p>Запустите бота <strong>@MoneyTikTok</strong> в Telegram и нажмите команду <code>/start</code>.</p>
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} md={6} lg={3} className="mb-4">
                        <div className="instruction-step" onClick={() => openModal('/assets/get-mtok.png')}>
                            <img src="/assets/get-mtok.png" alt="Получение MTOK" className="instruction-img" />
                            <div className="instruction-text">
                                <h3>Шаг 2: Получите MTOK</h3>
                                <p>Нажмите <strong>большую кнопку с логотипом TikTok</strong>, чтобы начать получать MTOK. Дождитесь 5 минут.</p>
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} md={6} lg={3} className="mb-4">
                        <div className="instruction-step" onClick={() => openModal('/assets/switch-tab.png')}>
                            <img src="/assets/switch-tab.png" alt="Переключение вкладки" className="instruction-img" />
                            <div className="instruction-text">
                                <h3>Шаг 3: Переключите вкладку</h3>
                                <p>Внизу экрана выберите <strong>следующую вкладку</strong> для продолжения работы с MTOK.</p>
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} md={6} lg={3} className="mb-4">
                        <div className="instruction-step" onClick={() => openModal('/assets/exchange.png')}>
                            <img src="/assets/exchange.png" alt="Выбор обменника" className="instruction-img" />
                            <div className="instruction-text">
                                <h3>Шаг 4: Выберите обменник</h3>
                                <p>Перейдите в раздел <strong>обменника</strong>, чтобы конвертировать MTOK в лайки или TON.</p>
                            </div>
                        </div>
                    </Col>
                </Row>

                <div className="instruction-note text-center">
                    Наслаждайтесь игрой и зарабатывайте!
                </div>

                {/* Bootstrap Modal */}
                <Modal show={isOpen} onHide={closeModal} centered>
                    <Modal.Body className="text-center">
                        <img src={currentImage} alt="Большое изображение" className="img-fluid" />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeModal}>Закрыть</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </Container>
    );
};

export default Instructions;
