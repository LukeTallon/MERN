import React from 'react'
//import { Link } from 'react-router-bootstrap'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import { useParams, Link } from 'react-router-dom'
import products from '../products'

const ProductScreen = () => {
  
  const params = useParams();
  const Product = products.find(p => p._id === params.id);

  

  return (
  <>
  
  <Link className='btn btn-light my-3' to='/'>Go Back</Link>
  
  <Row>
      <Col md={6}>
        <Image src={Product.image} alt={Product.name} fluid/>
      </Col>
      <Col md={3}>
        <ListGroup variant='flush'>
          <ListGroup.Item>
            <h3>{Product.name}</h3>
          </ListGroup.Item>
          <ListGroup.Item>
            <Rating value={Product.rating} text={`${Product.numReviews} reviews`} />
          </ListGroup.Item>
          <ListGroup.Item>
            Price: ${Product.price}
          </ListGroup.Item>
          <ListGroup.Item>
            Description: {Product.description}
          </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col md={3}>
        <Card>
          <ListGroup variant = 'flush'>
            <ListGroup.Item>
              <Row>
                <Col>
                  Price: 
                </Col>
                <Col>
                  <strong>${Product.price}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>
                  Status: 
                </Col>
                <Col>
                  {Product.countInStock > 0 ? 'In stock' : 'Out of Stock'}
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button className='btn-block' type='button' disabled={Product.countInStock === 0}>
                Add to Cart
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
  </Row>
  </>
    
  )
  
}

export default ProductScreen