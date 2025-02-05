// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Импортируем Bootstrap CSS
import "./i18n"; // Подключаем i18n
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
