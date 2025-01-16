import React, { useContext } from 'react'
import { useCartContext } from '../Context/Context'
import { SingleProduct } from './SingleProduct';
import { Filter } from './Filter';
import "./style.css"

export const Home = () => {
   let {state : {products}} = useCartContext();
   console.log(products)
  return (
    <div className='home'>
        <Filter/>
    <div className='productContainer'>
     {products.map((el)=>{
        return <SingleProduct product={el} key={el.id}/>
     })}
     </div>
    </div>
  )
}
