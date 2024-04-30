import React, { useEffect, useState } from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import {addToCart} from '../redux/slices/cartSlice'
import { addToWishlist } from '../redux/slices/whishlistSlice';
import {  useDispatch } from 'react-redux';


function Details() {
  const [data, setData] = useState([])
  const {id} = useParams()

  useEffect(() => {
    console.log(id);
    setData(JSON.parse(localStorage.getItem("response")).find(item => item.id == id))

  }, []
  )

  console.log(data);

  const dispatch=useDispatch()


 

  return (

    <>

      <div className='p-5 container'>

        <Row>

          <Col sm={12} md={6} lg={6}>

            <img src={data.thumbnail} alt="img" className='img-fluid' height={"500px"} />

          </Col>
          <Col sm={12} md={6} lg={6} className='p-5'>

            <div className='mb-3'>Product ID:{data.id}</div>
            <h1 className='mb-1'>{data.title}</h1>
            <div className='mb-3'>
              <span>
                {data.price}
              </span>
            </div>
            <p style={{ textAlign: 'justify' }}>{data.description}</p>
            <div className='d-flex justify-content-between mb-2'>
              <button className='btn btn-lg border ' onClick={()=>{dispatch(addToWishlist(data))}}   >
                <i className="fa-solid fa-heart-circle-plus" style={{ color: '#c7001e' }}></i>
              </button>

              <button className='btn btn-lg border ' onClick={()=>{dispatch(addToCart(data))}} >
                <i className="fa-solid fa-cart-plus" style={{ color: '#63E6BE' }}></i>
              </button>



            </div>
          </Col>


        </Row>


      </div>

    </>
  )
}

export default Details