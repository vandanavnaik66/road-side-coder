import React from 'react';
import Card from 'react-bootstrap/Card';
import { Rating } from './Rating';
import { Button } from 'react-bootstrap';

export const SingleProduct = ({product}) => {
  return (
    <div style={{width:"30%",margin:"10px"}}>
        <Card >
        <Card.Img src={product?.image} style={{width:"100%",height:"300px", objectFit:"cover"}}/>
       <Card.Body style={{display:"flex",flexDirection:"column"}}>
        <span>{product?.name}</span>
        <span> ₹ {product?.price.split(".")[0]}</span>
        <span>{product?.fastDelivery ? "Fast Delivery" : "4 days delivery"} </span>
        <Rating rating={product?.ratings}/>
        <span style={{display:"flex",marginTop:"5px"}}>
        <Button disabled={!product?.inStock} variant='primary' style={{fontSize:"12px",marginRight:"5px"}}>Add to Cart</Button>
        <Button variant='danger'style={{fontSize:"12px"}}>Remove from Cart</Button>
        </span>
        </Card.Body>
        </Card>
        </div>
  )
}

