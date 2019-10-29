import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Form.scss';
import { connect } from 'react-redux';
import { loginUser, createUser, getFavorites} from '../../actions';
import { Redirect } from 'react-router-dom';
import { loginUserCheck, createUserCheck, fetchFavorites } from "../../apiCalls";
import { IoIosFilm } from 'react-icons/io';
import PropTypes from 'prop-types';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: '',
      showModal: false,
      name: '',
      newEmail: '',
      newPassword: ''
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
    if (response.id) {
      this.props.loginUser({
        name: response.name,
        id: response.id,
        isSignedIn: true
      })
      this.setState({ error: '' })
      const favorites = await fetchFavorites(response.id)
      this.props.getFavorites(favorites)
    } else {
      this.setState({ error: response.error })
    }
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({
      email: '',
      password: '',
      name: ''
    })
  }

  handleCreateUser = async () => {
    const response = await createUserCheck({
      email: this.state.newEmail,
      name: this.state.name,
      password: this.state.newPassword
    })

    if (response.id) {
      this.props.createUser({
        name: response.name,
        email: response.newEmail,
        password: response.newPassword
      })
      this.setState({ error: '' })
    } else if(response.error.constraint === 'email') {
      this.setState({ error: 'User already exists' })
    }
    this.clearInputs()
  }

  render() {
    if (!this.state.error && this.props.user.isSignedIn) { return <Redirect to='/' /> };
    return (
      <div className='login-container'>
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
            <div className='login-buttons'>
              <Link to='/' className='link'>
                <button className='login-button' type='button' onClick={this.handleClick}>Login</button>
              </Link>
              <button className='login-button create-user' type='button' onClick={() => {
              this.setState({ showModal: true })
            }}>Create New User</button>
            </div>
          </form>
        </div>

        {this.state.showModal && 
        <div className='modal-background'>
          <div className='modal-content'>
            <label htmlFor='create-name'>Name</label>
            <input 
            id='create-name'
            type='text' 
            placeholder='Name'
            name='name'
            value={this.state.name}
            onChange={this.handleChange}
            ></input>
            <label htmlFor='create-email'>Email</label>
            <input 
            id='create-email'
            type='text' 
            placeholder='Email'
            name='newEmail'
            value={this.state.newEmail}
            onChange={this.handleChange}
            ></input>
            <label htmlFor='create-password'>Password</label>
            <input 
            id='create-password'
            type='password'
            placeholder='Password'
            name='newPassword'
            value={this.state.newPassword}
            onChange={this.handleChange}
            ></input>
            <button id='create-button' type='button' onClick={() => {
            this.setState({ showModal: false })
            this.handleCreateUser();
          }}>Create User</button>
        </div>
      </div>
      }
      </div>
    )
  }
}

const mapStateToProps = ({ user, favorites }) => ({
  user,
  favorites
})

const mapDispatchToProps = dispatch => ({
  loginUser: userInfo => dispatch(loginUser(userInfo)),
  createUser: userInfo => dispatch(createUser(userInfo)),
  getFavorites: favorites => dispatch(getFavorites(favorites))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

LoginForm.propTypes = {
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
  clearInputs: PropTypes.func,
  handleCreateUser: PropTypes.func,
  email: PropTypes.string,
  password: PropTypes.string,
  error: PropTypes.string,
  showModal: PropTypes.bool,
  name: PropTypes.string,
  newEmail: PropTypes.string,
  newPassword: PropTypes.string,
  user: PropTypes.object,
  favorites: PropTypes.array,
  loginUser: PropTypes.func,
  createUser: PropTypes.func,
  getFavorites: PropTypes.func

}