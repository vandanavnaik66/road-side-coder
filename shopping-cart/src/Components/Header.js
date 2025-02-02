import React from 'react'
import { Badge, Button, Container, Nav, Navbar } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import '../App.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/Context';
import { MdDelete } from "react-icons/md";

export const Header = () => {
  const{state:{cart},dispatch,productFilter:{searchQuery},productFilterDispatch} = useCartContext();
  return (
    <div>
        <Navbar bg="dark" variant='dark' style={{height:50}}>
            <Container  >
            <Navbar.Brand>
                <Link to="/">Shopping Cart</Link>
            </Navbar.Brand>
            <Nav>
            <Form className="d-flex">
            <Form.Control
            style={{width:"500px",height:30}}
              type="search"
              placeholder="Search a product" 
              className="m-auto"
              value={searchQuery}
              onChange={(e)=>productFilterDispatch({type:"By_Seach_Query",payload:e.target.value})}
            />
          </Form>
          <Button onClick={()=>productFilterDispatch({type:"Clear_Search_Input"})} className='clearBtn'>Clear</Button>
            </Nav>
            <Dropdown>
      <Dropdown.Toggle variant="success" >
     <Link > <FaCartShopping  color='white' fontSize="18px" /> </Link>
       <Badge bg="success">{cart?.length}</Badge>
    </Dropdown.Toggle>
    { cart?.length && <Dropdown.Menu style={{right:0,left:"auto"}}>
      {cart.map((el)=><Dropdown.Item>
        <span className='cart-drop-container'>
          <img src={el.image}/>
          <span className='cart-drop-text'>
            <p>{el?.name}</p>
            <p> ₹ {el?.price.split(".")[0]}</p>
          </span>
          <MdDelete className='cart-drop-delete' onClick={()=>dispatch({type:"Remove_From_Cart",payload:el})}/>
        </span>
      </Dropdown.Item>)}
      <span className='go-to-cart-btn'>
      <Button variant='primary' style={{width:"80%"}}> <Link to="/cart">Go to Cart</Link> </Button>
      </span>
      </Dropdown.Menu>}
      {cart?.length=== 0 && <Dropdown.Menu>
        <Dropdown.Item>Cart is Empty</Dropdown.Item>
        </Dropdown.Menu>}
    </Dropdown>
            </Container>
        </Navbar>
    </div>
  )
}
