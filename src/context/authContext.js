import {createContext, useContext, useEffect, useMemo, useState} from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {auth} from "../firebase";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const authContext = createContext(null)

export const useAuth = () => {
    return useContext(authContext);
};


export function AuthContextProvider ({children}) {
    const [user, setUser] = useState(null)
    const [errorMessage, setErrorMessage] = useState()
    const [isLoading, setIsLoading] = useState(false)

    console.log('response', localStorage)

    const navigate = useNavigate()

    function register (email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = async (data) => {
        try {
            setIsLoading(true)
            await axios.post('http://localhost:8080/api/login', data)
                .then((res)=>{
                    console.log('res', res.data.user.token)
                    // setUser({
                    //     user : res.data.user,
                    //     loggedIn : true
                    // })
                    localStorage.setItem('token', res.data.user.token)
                    for (const [key, value] of Object.entries(res.data.user)) {
                        localStorage.setItem(key, value)
                    }

                    navigate('/')
                    setIsLoading(false)
                })
                .catch((e)=>{
                    setErrorMessage(e.response.data.msg)
                    setIsLoading(false)
                    console.log('e', e)
                })
        } catch (err) {
            setErrorMessage(err.response.data.msg)
            console.log('err', err)
        }
    }
    function logout () {
        return signOut(auth)
    }
    function onAuthStateChanged(currentUser) {
        localStorage.setUser(JSON.stringify(currentUser))
        console.log('current', JSON.stringify(currentUser))
    }

    useEffect(() => {
        const checkSession = async () => {
            // await localStorage.getItem('token');
            if (localStorage.token) {
                // localStorage.user(setUser('sdfsdf'))
            }
        };
        return () => checkSession()
    },[])


    return (
        <authContext.Provider value={useMemo(()=>({login, register, logout, user, isLoading, errorMessage}),[user, isLoading, errorMessage])}>
            {children}
        </authContext.Provider>
    )
}
