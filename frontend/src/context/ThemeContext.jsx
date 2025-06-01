import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
    };

    export const ThemeProvider = ({ children }) => {
    const [isSunset, setIsSunset] = useState(() => {
        try {
        const savedTheme = localStorage.getItem('sunset');
        return savedTheme ? JSON.parse(savedTheme) : false;
        } catch (error) {
        console.error('Error reading from localStorage:', error);
        return false;
        }
    });

    useEffect(() => {
        try {
        localStorage.setItem('sunset', JSON.stringify(isSunset));
        } catch (error) {
        console.error('Error saving to localStorage:', error);
        }

        // Apply theme to document
        if (isSunset) {
        document.documentElement.setAttribute('data-theme', 'sunset');
        } else {
        document.documentElement.setAttribute('data-theme', 'emerald');
        }
    }, [isSunset]);

    const toggleTheme = () => {
        setIsSunset(prev => !prev);
    };

    return (
        <ThemeContext.Provider value={{ isSunset, toggleTheme }}>
        {children}
        </ThemeContext.Provider>
    );
};