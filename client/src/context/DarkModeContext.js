import { createContext, useState, useEffect } from "react";

export const DarkModeContext = createContext()

export const DarkModeContextprovider = ({children}) =>{
    const [darkMode, setDarkMode] = useState(
        JSON.parse(localStorage.getItem("darkMode")) || false );



    const toggle = () =>{
        setDarkMode(!darkMode)
    }

    useEffect(() => {
    
    localStorage.getItem('darkMode',darkMode)
    }, [darkMode]);


    return(
        <DarkModeContext.Provider value={{darkMode, toggle}}>
            {children}
        </DarkModeContext.Provider>
    )
}
