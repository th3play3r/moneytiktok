import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Instructions.css';
import { useTranslation } from "react-i18next";

const Instructions = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');
    const { t } = useTranslation();

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
            <h2 className="text-center">{t("HTP")}</h2>
            <div id="instructions" className="instructions-section d-flex flex-column">
                <Row className="justify-content-center flex-grow-1">
                    <Col xs={12} md={6} lg={3} className="mb-4">
                        <div className="instruction-step" onClick={() => openModal('/assets/start-bot.png')}>
                            <img src="/assets/start-bot.png" className="instruction-img" />
                            <div className="instruction-text">
                                <h3>{t("Step11")}</h3>
                                <p>{t("Step12")}</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={3} className="mb-4">
                        <div className="instruction-step" onClick={() => openModal('/assets/get-mtok.png')}>
                            <img src="/assets/get-mtok.png" className="instruction-img" />
                            <div className="instruction-text">
                                <h3>{t("Step21")}</h3>
                                <p>{t("Step22")}</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={3} className="mb-4">
                        <div className="instruction-step" onClick={() => openModal('/assets/switch-tab.png')}>
                            <img src="/assets/switch-tab.png" className="instruction-img" />
                            <div className="instruction-text">
                                <h3>{t("Step31")}</h3>
                                <p>{t("Step32")}</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={3} className="mb-4">
                        <div className="instruction-step" onClick={() => openModal('/assets/exchange.png')}>
                            <img src="/assets/exchange.png" className="instruction-img" />
                            <div className="instruction-text">
                                <h3>{t("Step41")}</h3>
                                <p>{t("Step42")}</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="instruction-note text-center mt-3">
                    {t("Note")}
                </div>

                {/* Bootstrap Modal */}
                <Modal show={isOpen} onHide={closeModal} centered>
                    <Modal.Body className="text-center">
                        <img src={currentImage} className="img-fluid" />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeModal}>{t("Close")}</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </Container>
    );
};

export default Instructions;
