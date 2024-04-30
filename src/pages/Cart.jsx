import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart ,emptyCart} from '../redux/slices/cartSlice'
import { useNavigate } from 'react-router-dom'

function Cart() {

  const cart = useSelector(state => state.cartReducer)
  console.log(cart);
    const navigate=useNavigate()
  const dispatch =useDispatch()

  const handleCheckOut=()=>{
    dispatch(emptyCart())
    alert("Every Items Checked Out...!")
      navigate('/')
       
  }

  return (
    <>
      <div className='container p-5'>
        <Row>
   
          <Col sm={12} md={8}>
            <h3>Cart Summary</h3>
           {cart?.length>0?
            <table className='table table-bordered shadow'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Product Name</th>
                  <th>Product Image</th>
                  <th>Product Price</th>
                  <th>Quantity </th>
                </tr>
              </thead>
              <tbody>

                { 
                  cart?.map(item => (
                    <tr>
                      <td>{item?.id}</td>
                      <td>{item?.title} </td>
                      <td>
                        <img height={'180px'} src={item?.thumbnail} alt="" />
                      </td>
                      <td>{item?.price}</td>
                      <td>{item.quantity}</td>
                      <td>
                        <button onClick={()=>{dispatch(removeFromCart(item?.id))}}>
                          <i className="fa-solid fa-trash" style={{ color: '#ce2c3c' }}></i>

                        </button>
                      </td>
                    </tr>


                  ))
                 
                }
                

              </tbody>
            </table>
            : <h1>No Cart Items...</h1>}
          </Col>
          <Col sm={12} md={4}>
            <div className='border shadow p-5 mt-5'>
              <h3>Total Products: <span className='text-info'>{cart?.length}</span></h3>
              <h3>Total Amount: <span className='text-warning'>{
                cart?.length>0?
              cart?.map(item=>item.quantity*item.price).reduce((total,item)=>total+item)
                :0
            }</span></h3>
            </div>
            <div className='d-grid mt-5'>
              <button className='btn btn-block btn-success '  onClick={handleCheckOut} >   
                  Check Out
              </button>
            </div>
          </Col>
        </Row>
      </div>

    </>
  )
}

export default Cart