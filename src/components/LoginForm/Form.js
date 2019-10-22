import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Form.scss';
import { connect } from 'react-redux';
import { loginUser } from '../../actions'

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleClick = e => {
    e.preventDefault();
    this.props.loginUser({
      email: this.state.email,
      password: this.state.password
    })
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({
      email: '',
      password: ''
    })
  }

  render() {
    return (
      <form className='login-form'>
        <div className='login-content'>
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
          <Link to='/'>
            <button className='login-button' type='button' onClick={this.handleClick}>Login</button>
          </Link>
        </div>
        <div className='form-styles'></div>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  loginUser: userInfo => dispatch( loginUser(userInfo) )
})

export default connect(null, mapDispatchToProps)(LoginForm);