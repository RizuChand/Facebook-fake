import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext()

export const AuthContextprovider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null );



    const login = () =>{
        setCurrentUser({id:1,name:"aniya",profilePic:"https://cdn1.katadata.co.id/media/images/thumb/2022/11/09/KARAKTER_ANIME_TERIMUT-2022_11_09-23_24_11_40afed16ccfe66e4587285ea8eaada1e_620x413_thumb.jpg"})
    }

    useEffect(() => {
    
    localStorage.getItem('user',JSON.stringify(currentUser) )
    }, [currentUser]);


    return(
        <AuthContext.Provider value={{currentUser, login }}>
            {children}
        </AuthContext.Provider>
    )
}