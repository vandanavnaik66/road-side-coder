import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; 
import "./style.css"
import { Rating } from './Rating';

export const Filter = () => {
const[rating,setRating] = useState();

function clearFilter(){
    setRating(0)
}

  return (
    <div className='filter'>
     <span style={{fontSize:"18px"}}>Filter Products</span>
     <span>
     <Form.Check
    label="Ascending"
    name="group1"
    type="radio"
          />
          </span>
          <span>
           <Form.Check
    label="Descending"
    name="group1"
    type="radio"
          />
          </span>
          <span>
          <Form.Check
    label="Include Out of Stock"
    name="group1"
    type="checkbox"
          />
          </span>
          <span>
          <Form.Check
          label="Fast Delivery Only"
          name=""
          type="checkbox"
                />
        </span>
        <span>
            <label style={{paddingRight:"10px"}}>Ratings :</label>
            <Rating  rating={rating} setRating={setRating} />
        </span>
    <Button variant="light" style={{fontSize:"14px"}} onClick={clearFilter}>Clear Filter</Button>
    </div>
  )
}
