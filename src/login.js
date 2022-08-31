import React, {useState} from 'react';
import {useAuthContext} from "./context/authContext";
import {useNavigate} from "react-router-dom";

export function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [errorMessage, setErrorMessage] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const {login, user} = useAuthContext()
    const navigate = useNavigate()

    console.log('user', user)

    const handleSubmit = async  (e) => {
        // Afin que ma page ne soit pas actualisée
        e.preventDefault()
        setErrorMessage('')
        setIsLoading(true)
        try {
            // Je vais avoir une attente
            await login(email, password)
            navigate('/products')
        } catch (err) {
            setErrorMessage(err.message)
        }
        setIsLoading(false)
    }


    return(
        <div className='border h-screen flex flex-col justify-center items-center'>
            <h1 className='font-bold text-3xl mb-10'>Login</h1>
            <form  onSubmit={handleSubmit} className='flex flex-col w-full sm:w-5/12 lg:w-3/12'>
                {errorMessage && (
                    <div className={'h-10 mb-10 px-4 py-8 bg-red-300 text-white flex justify-center items-center w-full'}>
                        {errorMessage}
                    </div>
                )}
                <input type="email"
                       onChange={(e)=> {setEmail(e.target.value)}}
                       className='input-form mb-8 h-10 bg-custom-grey focus:bg-custom-grey focus:ring-transparent focus:border-transparent border-gray-300 focus:border-gray-300 text-sm' placeholder={'Email'}/>
                <input type="password"
                       onChange={(e)=> {setPassword(e.target.value)}}
                       className='input-form mb-8 h-10 bg-custom-grey focus:bg-custom-grey focus:ring-transparent focus:border-transparent border-gray-300 focus:border-gray-300 text-sm' placeholder={'Password'}/>
                <button className='bg-black text-gray-100 py-3 text-sm w-full mt-2'>{isLoading ? 'Loading...' : 'Login'}</button>
            </form>
        </div>
    )
}