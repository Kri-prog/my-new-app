import React, { useState } from 'react';
import './InputWithButton.css'; 

const InputWithButton = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleButtonClick = () => {
        setInputValue('');
    };

    return (
        <div className="input-button-container">
            <input 
                type="text" 
                value={inputValue} 
                onChange={handleInputChange} 
                placeholder="Enter your text here" 
                className="input-field"
            />
            <button onClick={handleButtonClick} className="clear-button">
                Clear
            </button>
        </div>
    );
};

export default InputWithButton;