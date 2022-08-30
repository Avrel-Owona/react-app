import React, {useContext, useEffect, useState} from 'react';
import {UserContext} from "./context/userContext";
import axios from "axios";
import {Link} from "react-router-dom";

export function Home() {
    const {user, setUser} = useContext(UserContext)
    const [products, setProducts] = useState([])

    const allProducts = async () => {
        const response  = await axios.get('https://fakestoreapi.com/products')
            .catch((err) => {
                console.log('err', err)
            })
        console.log('response', response.data)
        setProducts(response.data)
    }
    useEffect(()=> {
        allProducts()
    },[])


    return(
        <div>
            <div className={'text-4xl'}>
                Home
                <div>
                    {products.map((product)=> {
                        return (
                            <Link to={`/products/${product.id}`}>{product.id}</Link>
                        )
                    })}
                </div>
            </div>
            {user}
            <button onClick={()=>setUser("c'est okay")} className='ml-3 bg-black text-white px-5 py-3'>Change value</button>
        </div>
    )
}