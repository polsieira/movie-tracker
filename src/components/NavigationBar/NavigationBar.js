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
      <h1 className="heading">moooovies.</h1>
      {isSignedIn ? <p className='user'>{name}</p> : null}
      <div className='login-fav'>
        <Link to='/login'>
          {isSignedIn ? <button className='sign-out' type='button' onClick={() => loginUser({ name: '', id: '', isSignedIn: false })}>Sign Out</button> : <button className='sign-in' type='button' >Sign In</button>}
        </Link>
        <Link to='/favorites'>
          <button className='favorites-button' type='button'>Favorites</button>
        </Link>
      </div>
    </div>
  )
}

const mapStateToProps = ({ user }) => ({
  isSignedIn: user.isSignedIn,
  name: user.name
});

const mapDispatchToProps = dispatch => ({
  loginUser: userInfo => dispatch(loginUser(userInfo))
})

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);