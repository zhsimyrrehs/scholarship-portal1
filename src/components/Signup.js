// src/components/Signup.js
import React from 'react';
import './Auth.css';

const Signup = ({ onClose }) => {
    return (
        <div className="auth-modal">
            <h2>Sign Up</h2>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default Signup;
