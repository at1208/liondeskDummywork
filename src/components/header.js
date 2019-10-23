import React from 'react';
import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return <div className='container-fluid'>
       <div className='a1'>
       <button className='float-right btn btn-md a2'>SIGN UP</button>
       <Link to='/login'><button className='float-right btn btn-md a2'>LOGIN</button></Link>
       </div>
         </div>
}
export default Header;
