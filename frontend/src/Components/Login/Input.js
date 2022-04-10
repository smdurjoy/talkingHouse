import React from 'react';

const Input = ({username, setUsername}) => {
    return (
        <div className="login-container">
            <input
                type="text"
                placeholder="Enter your name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="login-input"
            />
        </div>
    );
};

export default Input;