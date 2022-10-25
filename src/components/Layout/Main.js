import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div >
        <nav className='text-center  p-2 '>
            <Link  to='/login'> <span className='m-4'>Login</span></Link>
            <Link to='/register'> Register</Link>
        </nav>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;