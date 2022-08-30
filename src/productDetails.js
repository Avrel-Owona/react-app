import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

export function ProductDetails() {
    const [productDetails, setProductDetails] = useState([])

    const productId = useParams()
    const fetchProductDetail = async () => {
        await axios.get(`https://fakestoreapi.com/products/${productId.id}`)
            .then((res)=>{
                setProductDetails(res.data)
        })
            .catch((err)=> console.log(err))
    }

    useEffect(()=> {
        fetchProductDetail()
    },[])
    return(
        <div>
            <div className={'text-4xl'}>
                Product
            </div>
            <h1 className='text-5xl font-bold'>
                {productDetails.id}
            </h1>
        </div>
    )
}