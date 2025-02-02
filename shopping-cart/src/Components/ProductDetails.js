import React from 'react'
import { useParams } from 'react-router-dom'
import { useCartContext } from '../Context/Context';
import { SingleProduct } from './SingleProduct';

export const ProductDetails = () => {
    const {state:{products}} = useCartContext();
    let {id}= useParams();
    const product = products.find((el)=>id === el?.id)
  return (
    <div className='singleProduct'>
        <SingleProduct product={product} />
    </div>
  )
}
