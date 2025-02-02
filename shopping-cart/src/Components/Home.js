import React, { useContext, useState } from 'react'
import { useCartContext } from '../Context/Context'
import { SingleProduct } from './SingleProduct';
import { Filter } from './Filter';
import "./style.css"

export const Home = () => {
   let {state : {products},productFilter,productFilter:{sort,inStock,fastDelivery,ratings,searchQuery}} = useCartContext();
  
   const transformedProduct=()=>{
    let sortedProduct = products;
    if(sort){
     sortedProduct = sortedProduct.sort((a,b)=> sort === "lowToHigh" ? a.price - b.price : b.price-a.price )
    }
    if(inStock){
      sortedProduct = sortedProduct.filter((el)=>!el.inStock)
    }
    if(fastDelivery){
      sortedProduct = sortedProduct.filter((el)=>el.fastDelivery)
    }
    if(ratings){
      sortedProduct = sortedProduct.filter((el)=>el.ratings === ratings)
    }
    if(searchQuery){
      sortedProduct = sortedProduct.filter((el)=>el.name.toLowerCase().includes(searchQuery.toLowerCase()))
    }
    return sortedProduct;
   }

   return (
    <div className='home'>
        <Filter />
    <div className='productContainer'>
     {transformedProduct().map((el)=>{
        return <SingleProduct product={el} key={el.id}/>
     })}
     </div>
    </div>
  )
}
