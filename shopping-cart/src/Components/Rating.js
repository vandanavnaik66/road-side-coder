import React from 'react'
import { FaRegStar,FaStar  } from "react-icons/fa6";
{/*  */}

export const Rating = ({rating,onClick}) => {

function addRating(index){
    if(index < 5){
      onClick(index+1)
    }
}
function removeRating(index){
 if(index === 0){
    onClick(index)
 }else{
  onClick(index) 
 }
}

  return (
    <div className='rating'>
     {[...Array(5)].map((_,i)=> {
      if(rating && i < rating ){
        return <span onClick={()=>removeRating(i)}><FaStar /></span>
      }else{
        return <span onClick={()=>addRating(i)}><FaRegStar /></span>}
      }
     )}
    </div>
  )
}
