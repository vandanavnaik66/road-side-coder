import React from 'react'
import { FaRegStar,FaStar  } from "react-icons/fa6";
{/*  */}

export const Rating = ({rating,setRating}) => {

function addRating(index){
    if(index < 5){
        setRating(index+1)
    }
}
function removeRating(index){
 if(index === 0){
    setRating(0)
 }else{
   setRating(index) 
 }
}

  return (
    <div className='rating'>
     {[...Array(5)].map((_,i)=>{
        if(rating && (i < rating)){
            return <FaStar onClick={()=>removeRating(i)}/>
        }else{
            return <FaRegStar onClick={()=>addRating(i)}/>
        }
     })}
    </div>
  )
}
