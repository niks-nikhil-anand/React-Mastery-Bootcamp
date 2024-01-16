import { useContext , createContext } from "react";

export const ThemeContext = createContext({
    themeMode : "light" ,
    darkTheme : () =>{} ,
    lightTheme : () =>{}
})

export const ThemeProvider = ThemeContext.Provider

// custom hook to get rid of importing both ThemeContext , ThemeProvider 
// in every file.

// custome hook 

export default function useTheme(){
    return useContext(ThemeContext)
}