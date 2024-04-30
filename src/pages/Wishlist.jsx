import React from 'react'
import { Row, Col, Card, CardBody } from 'react-bootstrap'
import { useSelector ,useDispatch } from 'react-redux'
import {removeFromWishlist} from '../redux/slices/whishlistSlice'
import {addToCart} from '../redux/slices/cartSlice'

function Wishlist() {


  const { wishlist } = useSelector((state) => state.wishListReducer)

  console.log(wishlist);

  const dispatch=useDispatch()


  const handleAddeToCart=(product)=>{
    dispatch(addToCart(product))
    dispatch(removeFromWishlist(product.id))
  }

  return (
    <>

      <div className='container p-5'>

        <Row>

          {
            wishlist?.length > 0 ?

              wishlist?.map(item => (

                <Col sm={12} md={6} lg={4} xl={2}>

                  <Card>
                    <Card.Img height='150px' src={item.thumbnail} />
                    <CardBody>

                      <Card.Title>
                      {item?.title.slice(0,10)}...
                      </Card.Title>
                      <Card.Text>{item.price}</Card.Text>

                      <div className='d-flex justify-content-between mb-2'>
                        <button className='btn border '  onClick={()=>{dispatch(removeFromWishlist(item?.id))}}  >
                          <i className="fa-solid fa-heart-circle-xmark" style={{ color: '#c7001e' }}></i>
                        </button>

                        <button className='btn border ' onClick={()=>handleAddeToCart(item)}>
                          <i className="fa-solid fa-cart-plus" style={{ color: '#63E6BE' }}></i>
                        </button>



                      </div>


                    </CardBody>

                  </Card>
                </Col>))



              : <h1>

                No Wishlist Items...!
              </h1>


          }



        </Row>

      </div>


    </>
  )
}

export default Wishlist