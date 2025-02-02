import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; 
import "./style.css"
import { Rating } from './Rating';
import { useCartContext } from '../Context/Context';

export const Filter = () => {
   let {state : {products},productFilter,productFilter:{sort,inStock,fastDelivery,ratings,searchQuery},productFilterDispatch} = useCartContext();

  return (
    <div className='filter'>
     <span style={{fontSize:"18px"}}>Filter Products</span>
     <span>
     <Form.Check
    label="Ascending"
    name="group1"
    type="radio"
    checked={sort == "lowToHigh"}
    onChange={()=>productFilterDispatch({type:"Filter_By_Sort",payload:"lowToHigh"})}
          />
          </span>
          <span>
           <Form.Check
    label="Descending"
    name="group1"
    type="radio"
    id="descend"
    checked={sort == "highToLow"}
    onChange={(e)=>productFilterDispatch({type:"Filter_By_Sort",payload:"highToLow"})}
          />
          </span>
          <span>
          <Form.Check
    label="Include Out of Stock"
    name="outOfStock"
    type="checkbox"
    checked={inStock}
    onChange={()=>productFilterDispatch({type:"Filter_By_Instock"})}
          />
          </span>
          <span>
          <Form.Check
          label="Fast Delivery Only"
          name="fastDelivery"
          type="checkbox"
    checked={fastDelivery}
    onChange={()=>productFilterDispatch({type:"Filter_By_Fastdelivery"})}
                />
        </span>
        <span>
            <label style={{paddingRight:"10px"}}>Ratings :</label>
            <Rating rating={ratings} onClick={(i)=>productFilterDispatch({type:"Filter_By_Rating",payload:i})}/>
        </span>
    <Button variant="light" style={{fontSize:"14px"}} onClick={()=>productFilterDispatch({type:"Clear_Filter"})}>Clear Filter</Button>
    </div>
  )
}
