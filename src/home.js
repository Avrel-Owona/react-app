import React from 'react';
import {useAuth} from "./context/authContext";

export function Home() {
    const {user} = useAuth()
    console.log('local', localStorage.firstName)
    console.log('user', user)
    return (
        <div>
            <div className={'text-7xl font-bold h-screen w-full justify-center items-center flex'}>
                {localStorage.firstName}
            </div>
        </div>
    )
}