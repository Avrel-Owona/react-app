import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import {useAuth} from "./context/authContext";

export function Products() {
    const [products, setProducts] = useState([])
    const [error, setError] = useState([])
    const [isLoading, setIsLoading] = useState([false])


    // const {user}= useAuthContext()
    // console.log('currentUser', user)
    const deleteProduct = async (id) => {
        setIsLoading(true)
        try {
            const response = await axios.delete(`https://fakestoreapi.com/products/${id}`)
            console.log('response', response)
            const newProductsList = products.filter(e => e.id != id)
            setProducts(newProductsList)
            setIsLoading(false)
        } catch (e) {
            console.log('error', e)
            setIsLoading(false)
        }
    }

    const getAllProducts = async () => {
        setIsLoading(false)
        try {
            // Lorsqu'on utilise un try catch dans la fonction, on peut se passer de then
            const response = await axios.get('https://fakestoreapi.com/products')
            setProducts(response.data)
            setIsLoading(false)
        } catch (e) {
            console.log('error', e)
            setIsLoading(false)
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
                    <Link to={'/product/create'}><button className='px-8 py-4 border absolute top-32 right-16'>New product</button></Link>
                    <div className='flex flex-wrap justify-center mt-40'>
                        {isLoading ? 'loading...' :
                            products.map((product)=> {
                                return (
                                    <div>
                                        <Link to={`/products/${product.id}`}>
                                            <div className="w-80 border flex flex-col items-center pb-8 carte mt-8 mx-2">
                                                <div className="h-64 w-full border">
                                                    <img src={product.image} className="w-full h-full object-cover" alt=""/></div>
                                                <h3 className="text-center text-2xl text-gray-700 font-medium pt-8">
                                                    {product.title}
                                                </h3><span
                                                className="text-gray-400 text-center text-lg font-medium pt-4 font-light">{product.price} $</span>
                                            </div>
                                        </Link>
                                        <button className='bg-red-400 text-white px-6 py-4' onClick={()=> deleteProduct(product.id)}>{isLoading ? 'Loading...' : 'Delete'}</button>
                                    </div>
                                )
                            })}
                    </div>
                </div>
            </div>
            {/*<button onClick={()=>setUser("c'est okay")} className='ml-3 bg-black text-white px-5 py-3'>Change value</button>*/}
        </div>
    )
}