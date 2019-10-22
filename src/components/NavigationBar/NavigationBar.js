import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.scss';

const NavigationBar = () => {

  return (
    <div className='NavigationBar'>
      <form className='nav-form' action="">
        <input className='nav-input' type="search" />
        <i className="fa fa-search"></i>
      </form>
      <Link to='/login'>
        <button className='sign-in' type='button' >Sign In</button>
      </Link>
    </div>
  )
}

export default NavigationBar;