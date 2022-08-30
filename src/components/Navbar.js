import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {About} from "../About";
import {Home} from "../home";
import {UserContext} from "../context/userContext";
import {ProductDetails} from "../productDetails";


const Navbar = () => {

    const [user, setUser] = useState('Je suis le provider')
    return(
            <div>
                <nav className='w-full shadow-lg flex items-center justify-center h-20'>
                    <ul className='flex h-full justify-center items-center'>
                        <a className='ml-3' href="/">Home</a>
                        <a className='ml-3' href="/about">About</a>
                    </ul>
                </nav>

                   <UserContext.Provider value={{ user, setUser }}>
                       <Routes>
                           <Route path="/" exact element={<Home/>} />
                           <Route path="/about/" element={<About/>} />
                           <Route path="/products/:id" exact element={<ProductDetails/>} />
                       </Routes>
                   </UserContext.Provider>

            </div>
    );
};

export default Navbar;