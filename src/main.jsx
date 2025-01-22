// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Импортируем Bootstrap CSS

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
