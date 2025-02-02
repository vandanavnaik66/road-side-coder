import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Rating } from './Rating';
import { Button } from 'react-bootstrap';
import { useCartContext } from '../Context/Context';
import { Link } from 'react-router-dom';

export const SingleProduct = ({product}) => {
    const {state:{cart},dispatch}= useCartContext();

  return (
    <div style={{width:"30%",margin:"10px"}}>
        <Card >
      <Link to={`/home/${product.id}`}> <Card.Img src={product?.image} style={{width:"100%",height:"300px", objectFit:"cover"}}/></Link>
       <Card.Body style={{display:"flex",flexDirection:"column"}}>
        <span>{product?.name}</span>
        <span> ₹ {product?.price.split(".")[0]}</span>
        <span>{product?.fastDelivery ? "Fast Delivery" : "4 days delivery"} </span>
        <Rating rating={product?.ratings}/>
        <span style={{display:"flex",marginTop:"5px"}}>
       
       {cart.some((el)=>el.id === product.id) ? <Button variant='danger'style={{fontSize:"12px"}}
       onClick={()=>dispatch({type:"Remove_From_Cart",payload:product})}
       >Remove from Cart</Button> : ( <Button disabled={!product?.inStock} variant='primary' style={{fontSize:"12px",marginRight:"5px"}} 
       onClick={()=>dispatch({type:"Add_To_Cart",payload:product})}
       >Add to Cart</Button>)}
        </span>
        </Card.Body>
        </Card>
        </div>
  )
}

