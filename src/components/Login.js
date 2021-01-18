import React, {useState} from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth'


const Login = props => {
  const [credentials, setCredentials] = useState({
    credentials: {
      username: '',
      password: '',
    }
  })

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }


  const loginHandler = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/api/login', credentials)
      .then(res => 
        window.localStorage.setItem('token', res.data.payload),
        props.history.push('/itemPage')
      )
      .catch(err => console.log(err))

  }
  return (
    <>
      <h1>SOLAR:Cerroneth Magic Item Database</h1>
      <h2>Login:</h2>
      <form onSubmit={loginHandler}>
        <label>Username</label>
        <input
          type="text"
          name='username'
          value={credentials.username}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          name='password'
          value={credentials.password}
          onChange={handleChange}
        />
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;