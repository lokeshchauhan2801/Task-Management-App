import React, { useState } from 'react';

const Dropdown = ({ options, onChange, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState('');

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (option) => {
        setSelected(option);
        onChange(option);
        setIsOpen(false);
    };

    return (
        <div className="dropdown">
            <div className="dropdown-header" onClick={toggleDropdown}>
                {selected || placeholder}
            </div>
            {isOpen && (
                <div className="dropdown-menu">
                    {options.map((option) => (
                        <div
                            key={option}
                            className="dropdown-item"
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
