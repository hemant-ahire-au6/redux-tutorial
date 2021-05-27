import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { selectProducts } from '../redux/actions/productActions'
import axios from "axios"


function ProductDetails() {
    const product = useSelector(state => state.product)
    const { title, price, description, image } = product
    const { productId } = useParams();
    const dispatch = useDispatch();
    const fetchProductdetails = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch(err => {
            console.log(err)
        })
        console.log(response.data)
        dispatch(selectProducts(response.data));
    }

    useEffect(() => {
        if (productId && productId !== "") fetchProductdetails();

    }, [productId])

    return (
        <div>
            <div className="ui container" style={{ marginTop: "50px" }}>
                <div class="ui vertically divided grid">
                    <div class="two column row">
                        <div class="column">
                            <img src={image} style={{ height: "500px" }} alt=" " />
                        </div>
                        <div class="column">
                            <div style={{marginTop:"20px"}}>
                                <h5>{title}</h5>
                                <p>Description:<br/> {description}</p>
                                <p>Price <br/>  {price}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
