import { createContext, useContext } from "react";

export const themeContext = createContext({
    theme: "",
    toggleTheme: function(){}
})

export const ThemeToggleProvider = themeContext.Provider;

export default function useThemeToggle(){
    return useContext(themeContext);
}