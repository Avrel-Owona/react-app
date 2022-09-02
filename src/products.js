import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

export function Products() {
    const [products, setProducts] = useState([])

    // const {user}= useAuthContext()
    // console.log('currentUser', user)

    const allProducts = async () => {
        const response  = await axios.get('https://fakestoreapi.com/products')
            .catch((err) => {
                console.log('err', err)
            })
        setProducts(response.data)
    }
    useEffect(()=> {
        allProducts()
    },[])


    return(
        <div>
            <div className={'text-4xl'}>
                Products
                <div>
                    {products.map((product)=> {
                        return (
                            <Link to={`/products/${product.id}`}>{product.id}</Link>
                        )
                    })}
                </div>
            </div>
            {/*<button onClick={()=>setUser("c'est okay")} className='ml-3 bg-black text-white px-5 py-3'>Change value</button>*/}
        </div>
    )
}