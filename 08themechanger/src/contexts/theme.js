// Importing necessary modules from React
import { createContext, useContext } from "react";

// Creating a ThemeContext using createContext and providing default values
export const ThemeContext = createContext({
    themeMode: "light",   // Default theme mode is light
    darkTheme: () => {},   // Placeholder function for enabling dark theme
    lightTheme: () => {},  // Placeholder function for enabling light theme
});

// Creating a ThemeProvider and assigning it to ThemeContext.ThemeProvider
export const ThemeProvider = ThemeContext.Provider;

// Custom hook to use the theme context values
export default function useTheme() {
    return useContext(ThemeContext);
}
