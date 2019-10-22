import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Form.scss';

class LoginForm extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <form className='login-form'>
        <div className='login-content'>
          <label htmlFor='email'>Email:</label>
          <input id='email' type='text' placeholder='Ex. name@email.com' name='email'></input>
          <label htmlFor='password'>Password (8 characters minimum):</label>
          <input id='password' type='password' minLength='8' name='password'></input>
          <Link to='/'>
            <button className='login-button' type='button'>Login</button>
          </Link>
        </div>
        <div className='form-styles'></div>
      </form>
    )
  }
}

export default LoginForm;