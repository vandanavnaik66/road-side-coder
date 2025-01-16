import React from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import '../App.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export const Header = () => {
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
            />
          </Form>
            </Nav>
            <Dropdown>
      <Dropdown.Toggle variant="success" >
       <FaCartShopping  color='white' fontSize="18px"/>
       <Badge bg="success">10</Badge>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Cart is Empty</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </Container>
        </Navbar>
    </div>
  )
}
