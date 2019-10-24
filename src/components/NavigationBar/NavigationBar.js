import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.scss';
import { connect } from 'react-redux';
import { loginUser } from '../../actions';

const NavigationBar = ({ isSignedIn, name, loginUser }) => {

  return (
    <div className='NavigationBar'>
      <form className='nav-form' action="">
        <input className='nav-input' type="search" />
        <i className="fa fa-search"></i>
      </form>
      <h1 className="heading">mooovies.</h1>
      {isSignedIn ? <p className='user'>{name}</p> : null}
      <Link to='/login'>
        {isSignedIn ? <button className='sign-out' type='button' >Sign Out</button> : <button className='sign-in' type='button' >Sign In</button>}
      </Link>
    </div>
  )
}

const mapStateToProps = ({ user }) => ({
  isSignedIn: user.isSignedIn,
  name: user.name
});

const mapDispatchToProps = dispatch => ({
  loginUser: userInfo => dispatch( loginUser(userInfo) )
})

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);