import React from 'react';

const Button = ({handleSubmit}) => {
    return (
        <div>
            <button
                className="login-button"
                onClick={handleSubmit}
            >
                Join ➙
            </button>
        </div>
    );
};

export default Button;