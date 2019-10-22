import React from 'react';
import './NavigationBar.scss';

const NavigationBar = () => {

  return (
    <div className='NavigationBar'>
      <form action="">
        <input type="search" />
        <i class="fa fa-search"></i>
      </form>
      <h1 className="heading">mooovies.</h1>
      <button className='sign-in' type='button' >Sign In</button>
    </div>
  )
}

export default NavigationBar;