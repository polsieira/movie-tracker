import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Form.scss';
import { connect } from 'react-redux';
import { loginUser } from '../../actions';
import { Redirect } from 'react-router-dom';
import { loginUserCheck } from "../../apiCalls";
import { IoIosFilm } from 'react-icons/io';

class LoginForm extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <form className='login-container'>
        <div className='login-content'>
          <IoIosFilm className='film-icon' />
          <h1 className='login-heading'>Log In</h1>
          <form className='login-form'>
            {this.state.error && <div className='sign-in-error'>{`*${this.state.error}`}</div>}
            <label htmlFor='email'>Email:</label>
            <input
              id='email'
              type='text'
              placeholder='Ex. name@email.com'
              name='email'
              value={this.state.email}
              onChange={this.handleChange}
            />
            <label htmlFor='password'>Password (8 characters minimum):</label>
            <input
              id='password'
              type='password'
              minLength='8'
              name='password'
              value={this.state.password}
              onChange={this.handleChange}
            />
            <Link to='/' className='link'>
              <button className='login-button' type='button' onClick={this.handleClick}>Login</button>
            </Link>
          </form>
        </div>
      </form>
    )
  }
}

export default LoginForm;