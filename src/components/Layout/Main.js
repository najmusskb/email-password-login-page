import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div >
        <nav className='text-center  p-2 m-2 '>
            <Link  to='/login'> <span className='m-4'>Login</span></Link>
            <Link to='/register' className='m-4'> Register</Link>
            <Link to='/Others'  className='m-4'> Others</Link>
            <Link to='/about'  className='m-4'> about</Link>
            <Link to='/contact'  className='m-4'> contact</Link>
            <Link to='/carrear'  className='m-4'> carrear</Link>
        </nav>
        
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;