import { useState, useEffect } from 'react';

const useThemeSwitcher = () => {
    const preferDarkQuery = "(prefers-color-scheme: dark)";
    const [mode, setMode] = useState(() => {
        // Check for user preference in local storage or default to media query
        const userPref = window.localStorage.getItem("theme");
        if (userPref) {
            return userPref;
        }
        const mediaQuery = window.matchMedia(preferDarkQuery);
        return mediaQuery.matches ? 'dark' : 'light';
    });

    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery);

        const handleChange = () => {
            if (mode === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        };

        // Apply initial theme
        handleChange();

        // Listen for changes in the media query
        mediaQuery.addEventListener("change", handleChange);

        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, [mode]);

    useEffect(() => {
        if (mode === 'dark') {
            window.localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark');
        } else {
            window.localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove('dark');
        }
    }, [mode]);

    return [mode, setMode];
};

export default useThemeSwitcher;
