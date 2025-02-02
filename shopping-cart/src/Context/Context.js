import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { faker } from '@faker-js/faker';
import { cartReducer, productFilterReducer } from './Reducers';

export  const cartContext = createContext();
faker.seed(99)

export const Context = ({children}) => {
   const products = [...Array(20)].map(()=>({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price : faker.commerce.price(),
    image: faker.image.urlLoremFlickr(),
    inStock : faker.helpers.arrayElement([0,3,5,6,7]),
    fastDelivery : faker.datatype.boolean(),
    ratings:faker.helpers.arrayElement([1,2,3,4,5])
   }))

   const [state,dispatch] = useReducer(cartReducer,{products,cart:[]})
   const [productFilter,productFilterDispatch] = useReducer(productFilterReducer,{
    sort:"",
    inStock:false,
    fastDelivery:false,
    ratings:0,
    searchQuery:""
   })


  return (
    <cartContext.Provider value={{state,dispatch,productFilter,productFilterDispatch}}>
     {children}
    </cartContext.Provider>
  )
}

export const useCartContext = ()=>{
    return useContext(cartContext)
}
