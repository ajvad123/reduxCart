import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (

    <div>

      <div className='d-flex justify-content-center bg-dark text-light p-5 '>
        <div className='w-25'>
          <h3>ReduxCart 2024</h3>
          <p style={{ textAlign: 'center' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste facere, totam, nemo deserunt ratione nostrum veniam reiciendis in aut eveniet hic, placeat consequuntur sint quidem voluptates aspernatur quasi temporibus repudiandae.</p>
        </div>
        <div className='w-25 text-center'>
          <h3>Links</h3>
          <Link to={'/wish'} className='d-block mb-3 mt-3'  >WishList</Link>
          <Link to={'/Cart'}   >WishList</Link>

        </div>

        <div className='w-25'>

            <h3>References</h3>
            <a href="" className='d-block mt-3 mb-3' >React Bootstrap</a>
            <a href="" className='d-block mb-3' >React</a>
            <a href="">Redux</a>

        </div>

        <div className='w-25'>

          <h3>Contact Us</h3>
          <p>Submit your email , so we can contact you .... </p>
          <input type="email" placeholder='Enter Email Id' className='form-control' name="" id="" />
          <button className='btn btn-outline-light mt-3'>Submit</button>

        </div>

      </div>
      <h6 className='text-center'>ReduxCart 2024 &copy; All right reserved.</h6>

    </div>
  )
}

export default Footer