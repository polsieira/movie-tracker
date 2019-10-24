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
    super();
    this.state = {
      email: '',
      password: '',
      error: ''
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleClick = async e => {
    e.preventDefault();
    const response = await loginUserCheck({
      email: this.state.email,
      password: this.state.password,
    });
    console.log(response)
    if (response.id) {
      this.props.loginUser({
        name: response.name,
        id: response.id,
        isSignedIn: true
      })
      this.setState({ error: '' })
    } else {
      this.setState({ error: response.error })
    }
    console.log(response)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({
      email: '',
      password: ''
    })
  }

  render() {
    if (!this.state.error && this.props.user.isSignedIn) { return <Redirect to='/' /> };
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

const mapStateToProps = ({ user }) => ({
  user
})

const mapDispatchToProps = dispatch => ({
  loginUser: userInfo => dispatch(loginUser(userInfo))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);