// src/components/Login.js
import React from 'react';
import './Auth.css';

const Login = ({ onClose }) => {
    return (
        <div className="auth-modal">
            <h2>Login</h2>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default Login;
