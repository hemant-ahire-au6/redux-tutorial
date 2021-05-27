import React,{useEffect} from 'react'
import Link from "react-router-dom"
import { useSelector,useDispatch } from 'react-redux'
import axios from "axios"
import ProductComponet from './ProductComponet'
import {setProducts} from '../redux/actions/productActions'

function ProductListing() {
    const products = useSelector((state)=> state)
    const dispatch = useDispatch()
    
    const fetchProducts = async ()=>{
        const response = await axios
        .get('https://fakestoreapi.com/products')
        .catch(err =>{
            console.log("err",err);
        })
        dispatch(setProducts(response.data))
    }
    
    useEffect(()=>{
        fetchProducts();
    },[]);

    console.log(products)

    return (
        <div className=" ui container" style={{marginTop:"50px"}}>
            <ProductComponet/>
        </div>
    )
}

export default ProductListing;
