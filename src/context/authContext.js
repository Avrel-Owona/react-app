import {createContext, useContext, useEffect, useState} from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'
import {auth} from "../firebase";

const authContext = createContext()

export function AuthContextProvider ({children}) {
    const [user, setUser] = useState('')

    function register (email, password) {
        //Pour creer un nouvel utilisateur, il aura besoin de notre instance d'authentification que nous aurions
        //Creer dans le fichier firebase.js
        return createUserWithEmailAndPassword(auth, email, password)
    }
    function login (email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }
    function logout (email, password) {
        return signOut(auth)
    }

    // Nous permets de savoir comment Firebase nous informe si un user est creé ou est connecté
    // C'est notre fonction de changement d'authenfication {onAuthStateChanged}
    // Nous voulons l'utiliser une fois que le composant est monté donc le choix est pour un useEffect
    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return ()=> unSubscribe()
    },[])


    return (
        <authContext.Provider value={{user, register, login, logout}}>
            {children}
        </authContext.Provider>
    )
}

export function useAuthContext() {
    return useContext(authContext)
}