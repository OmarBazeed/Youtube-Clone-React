import React from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants';
import SearchBar from './SearchBar';

export default function Navbar() {
  return (
  <div className='container-fluid' style={{background:'black',padding:'10px 5px'}} >
    <div className='container'>
        <div className='row align-items-center navbarRow justify-content-xs-between navbarRow'>
            <div className='col-xs-2 col-sm-4 myLogo'  >
              <Link to='/'>
              <img src={logo} alt='..' height='45px' />
              </Link>
            </div>

            <div className='col-xs-10 col-sm-8 text-lg-center'>
              <SearchBar />
            </div>
        </div>
    </div>
  </div>
  )
}
