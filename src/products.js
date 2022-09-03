import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import {useAuth} from "./context/authContext";

export function Products() {
    const [products, setProducts] = useState([])
    const [error, setError] = useState([])


    // const {user}= useAuthContext()
    // console.log('currentUser', user)

    const getAllProducts = async () => {
        try {
            // Lorsqu'on utilise un try catch dans la fonction, on peut se passer de then
            const response = await axios.get('https://fakestoreapi.com/products')
            console.log('response', response)
            setProducts(response.data)
        } catch (e) {
            console.log('error', e)
        }
    }
    useEffect(()=> {
        getAllProducts()
    },[])


    return(
        <div>
            <div className={'text-4xl w-full text-center mt-20'}>
                Products
                <div>
                    <div className='flex flex-wrap justify-center mt-40'>
                        {products.map((product)=> {
                            return (
                                <Link to={product.id}>
                                    <div className="w-80 border flex flex-col items-center pb-8 carte mt-8 mx-2">
                                        <div className="h-64 w-full border">
                                            <img src={product.image} className="w-full h-full object-cover" alt=""/></div>
                                        <h3 className="text-center text-2xl text-gray-700 font-medium pt-8">
                                            {product.title}
                                        </h3><span
                                        className="text-gray-400 text-center text-lg font-medium pt-4 font-light">{product.price} $</span>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
            {/*<button onClick={()=>setUser("c'est okay")} className='ml-3 bg-black text-white px-5 py-3'>Change value</button>*/}
        </div>
    )
}