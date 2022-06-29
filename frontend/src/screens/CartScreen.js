import React, {useEffect} from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import { Row, Col, ListGroup, Image, Form, Button, Card} from 'react-bootstrap'
import {addToCart} from '../actions/cartActions'

const CartScreen = () => {
    const location = useLocation();
    const params = useParams();
const productId = params.id
const qty = new URLSearchParams(location.search).get('qty');

//const qty = location.search ? Number(location.search.split('=')[1]) : 1
const dispatch = useDispatch()

const cart = useSelector(state => state.cart)
const {cartItems} = cart

console.log(cartItems)

useEffect(() => {
    if(productId){
        dispatch(addToCart(productId, qty))
    }
}, [dispatch, productId, qty])

  return (
    <div>Cart</div>
  )
}

export default CartScreen