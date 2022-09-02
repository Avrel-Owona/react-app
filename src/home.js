import React from 'react';
import {useAuth} from "./context/authContext";

export function Home() {
    const {user} = useAuth()
    console.log('user', user)


    return (
        <div className='flex-col h-screen w-full justify-center items-center flex'>
            {/*<ToastList/>*/}
            <div className={'text-7xl font-bold'}>
                {localStorage.firstName ? localStorage.firstName : (<p className='text-center'>Please login to access <br/> the product page</p>)}
            </div>
        </div>
    )
}