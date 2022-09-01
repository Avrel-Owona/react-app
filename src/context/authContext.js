import {createContext, useContext, useEffect, useMemo, useState} from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {auth} from "../firebase";

const authContext = createContext()

export function AuthContextProvider ({children}) {
    const [user, setUser] = useState('')

    function register (email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    function login (email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }
    function logout () {
        return signOut(auth)
    }
    function onAuthStateChanged(currentUser) {
        localStorage.setUser(JSON.stringify(currentUser))
        console.log('current', JSON.stringify(currentUser))
    }

    useEffect(()=> {
        const subscribe = auth.onAuthStateChanged(onAuthStateChanged)
        return ()=> subscribe()
    },[])


    return (
        <authContext.Provider value={useMemo(()=>({login, register, logout, user}),[user])}>
            {children}
        </authContext.Provider>
    )
}

export function useAuthContext() {
    return useContext(authContext)
}