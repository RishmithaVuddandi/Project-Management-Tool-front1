import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import image from '../3.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <div className='bg shadow h-14 flex justify-between items-center px-4' style={{ background: '#fef5eb', justifyContent: 'left', alignItems: 'left' }}>
      {/* Move the logo to the left corner */}
      <Link to='/'>
        <img src={image} alt='Logo' className='h-8 w-8 mr-2 cursor-pointer' style={{ height: '57px', width: '300px', position: 'left', display: 'block' }} />
      </Link>

      {/* Menu items on the left */}
      <div className='flex items-center space-x-4'>
        {/* Add margin-right to create space */}
        <Link to="/" style={{ color: '#111111', textDecoration: 'none', fontFamily: 'SlabSerif', fontSize: '23px', padding: '10px', margin: '0 20px' }}>Home</Link>
        <Link to="/Pricing" style={{ color: '#111111', textDecoration: 'none', fontFamily: 'SlabSerif', fontSize: '23px', padding: '10px', margin: '0 20px' }}>Pricing</Link>
      </div>

      <div className='flex items-center space-x-4'>
        <Link to="/ContactUs" style={{ color: '#111111', textDecoration: 'none', fontFamily: 'SlabSerif', fontSize: '23px', padding: '10px', margin: '0 20px' }}>Contact Us</Link>
        <Link to="/About" style={{ color: '#111111', textDecoration: 'none', fontFamily: 'SlabSerif', fontSize: '23px', padding: '10px', margin: '0 20px' }}>About</Link>
        
        {/* Add margin-right to create space between About and Logout */}
        <Link to="/login" style={{ color: '#111111', textDecoration: 'none', fontFamily: 'SlabSerif', fontSize: '23px', padding: '10px', marginLeft: '300px' }}>Logout</Link>
      </div>
    </div>
  );
};

export default Navbar;
