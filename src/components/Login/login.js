import React from 'react';
import './login.css';

const Login  = () => {
  return <div className='container'>
  <div className='card container b1 col-md-5'>
        <h1 className='text-center'>LOGIN</h1>
          <label>Username</label>
          <input className='b3 text-center' placeholder='Please Enter your Username'/>

          <label>Password</label>
          <input className='b3 text-center'placeholder='Please Enter your Password'/>

          <button className='btn btn-sm b2  '>Submit</button>
  </div>
</div>
}
export default Login;
