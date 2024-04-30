import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductThunk } from '../redux/slices/productSlice'
import Spinner from 'react-bootstrap/Spinner';
import { addToWishlist } from '../redux/slices/whishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';

function Home() {

  const dispatch = useDispatch()
  const { product, loading, error } = useSelector((state) => state.productReducer)

  useEffect(() => {
    dispatch(fetchProductThunk())
  }, [])

  console.log(product);
  return (
    <>
      <header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">ReduxCart</h1>
            <p class="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
          </div>
        </div>
      </header>




      <section class="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">


            {
              !loading && error &&
              <div className='text-danger displya-4'>
                {error}
              </div>
            }

            {

              loading ?
                <div>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  <h1>Loading...</h1>


                </div>


                : !error&&
                product.map(items=>(

                  <div className="col mb-5">
                  <div className="card h-100">
                    <Link to={`/details/${items?.id}`}>
                      <img className="card-img-top" style={{height:'200px'}} src={items?.thumbnail} alt="..." />
                    </Link>
                    <div className="card-body p-4">
                      <div className="text-center">
                        <h5 className="fw-bolder">{items?.title}</h5>
                        {items?.price}
                      </div>
                    </div>
                    <div className='d-flex justify-content-between mb-2'>
                      <button className='btn border ' onClick={()=>{dispatch(addToWishlist(items))}}  >
                        <i className="fa-solid fa-heart-circle-plus" style={{ color: '#c7001e' }}></i>
                      </button>
    
                      <button className='btn border '>
                        <i className="fa-solid fa-cart-plus" onClick={()=>{dispatch(addToCart(items))}} style={{ color: '#63E6BE' }}></i>
                      </button>
    
    
    
                    </div>
                  </div>
                </div>


                ))

            }


      
          </div>
        </div>
      </section>

    </>
  )
}

export default Home