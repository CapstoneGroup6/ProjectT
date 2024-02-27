import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import Tetris from './components/Tetris';
import Game from './components/Game';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <App />
    <>
        {/* <Navbar />
        <LoginForm /> */}
        {/* <Tetris /> */}
        <Game rows={20} cols={10} />
    </>
);