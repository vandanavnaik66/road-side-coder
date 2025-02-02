import React, { useEffect, useState } from 'react'
import { useCartContext } from '../Context/Context'
import { Button, Form, ListGroup } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap'
import { Rating } from './Rating';
import { MdDelete } from "react-icons/md";


export const Cartcomp = () => {
  const{state:{cart},dispatch} = useCartContext();
  const[total,setTotal] = useState(0)

  useEffect(()=>{
   setTotal(cart?.reduce((acc,el)=> acc + Number(el.price*el.qty),0))
  },[cart])
  return (
    <div className='home'>
     <div className='productContainerCart'>
    {cart?.map((el)=>(
      <ListGroup>
       <ListGroup.Item>
        <Row>
        <Col sm={2}><img src={el.image} className='cart-list-img'/></Col>
        <Col sm={2}>{el?.name}</Col>
        <Col sm={2}>{el?.price}</Col>
        <Col sm={2}><Rating rating={el?.ratings}/></Col>
        <Col sm={2}>
        <Form.Control as="select" value={el.qty} onChange={(e)=>dispatch({type:"Change_Cart_Qty",payload:{
          qty: e.target.value,
          id:el.id
        }})}>
         {[...Array(el.inStock).keys()].map((el)=><option key={el+1}>{el+1}</option>)}
        </Form.Control>
        </Col>
        <Col sm={2}>
       <MdDelete onClick={()=>dispatch({type:"Remove_From_Cart",payload:el})}/>
        </Col>
        </Row>
       </ListGroup.Item>
      </ListGroup>
    )) }
      </div> 
     <div className='TotalCountInCart'>
       <p>Subtotal ({cart.length}) items</p>
       <p>Total: ₹{total}</p>
       <Button variant='primary'>Proceed to Checkout</Button>
      </div> 
    </div>
  )
}
