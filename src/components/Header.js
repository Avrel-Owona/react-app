import React from 'react';
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate
    return (
        <nav className='w-full shadow-lg flex items-center justify-between px-20 h-20'>
            {localStorage.firstName ?
                <ul className='flex h-full justify-center items-center'>
                    <a className='ml-3' href="/products/">Products</a>
                    <a className='ml-3' href="/">Home</a>
                    <button className='bg-black px-4 py-3 text-white ml-3' onClick={()=>{
                        localStorage.clear()
                        navigate('/login')
                    }}>Log out</button>

                </ul> :
                <ul className='flex h-full justify-center items-center'>
                    <a className='ml-3' href="/">Home</a>
                    <a className='ml-3' href="/login/">Login</a>
                    <a className='ml-3' href="/register/">Register</a>
                </ul>}

            <button className='border text-black px-4 py-3 text-white ml-3'>{localStorage.firstName}</button>
        </nav>
    );
};

export default Header;