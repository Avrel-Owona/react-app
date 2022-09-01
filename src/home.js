import React from 'react';
import {useAuth} from "./context/authContext";

export function Home() {
    const {user} = useAuth()
    console.log('user', user)
    return (
        <div>
            <div className={'text-7xl font-bold h-screen w-full justify-center items-center flex'}>
                You are not auth
            </div>
        </div>
    )
}