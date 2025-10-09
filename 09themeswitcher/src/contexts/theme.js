import { createContext, useContext } from "react";

//This represents what are the values that are present inside the context
export const ThemeContext = createContext({
    themeMode: "Light",
    darkTheme: () =>{},
    lightTheme: () =>{},
});

// This makes sure everybody is aware of the context
export const ThemeProvider = ThemeContext.Provider;


// we are adding the value in this function similar to userContextProvider.jsx value in 08minicontextapi
export default function useTheme() {
    return useContext(ThemeContext)
}