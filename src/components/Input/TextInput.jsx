import React from 'react'

const TextInput = ({ isDarkMode, value, handleInputChange, textarea, label, name, placeholder, rows = 5 }) => {
    const InputComponent = textarea ? "textarea" : "input";

    return (
        <div className="relative">
            <InputComponent
                id={name}
                name={name}
                {...(!textarea && { type: 'text' })}
                {...(textarea && { rows })}
                placeholder={placeholder || " "}
                className={`w-full px-4 pt-6 pb-2 border rounded-xl transition-all duration-300 outline-none resize-none ${
                    isDarkMode
                        ? "bg-gray-800/50 border-gray-700 text-white focus:border-[#7B3F00] focus:bg-gray-800/70"
                        : "bg-white/80 border-gray-300 text-gray-900 focus:border-[#7B3F00] focus:bg-white"
                }`}
                value={value}
                onChange={({ target }) => handleInputChange(target.value)}
            />
            <label
                htmlFor={name}
                className={`text-sm absolute left-4 top-2 pointer-events-none origin-left transition-colors duration-300 ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}
            >
                {label}
            </label>
        </div>
    );
};

export default TextInput;