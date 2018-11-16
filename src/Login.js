import React from 'react';

const Login = () => {
  return(
    <div>
      <form>
        <div>
        <br />
        <br />
          <input type="text" name="username" placeholder="Username" />
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="text" name="password" placeholder="password" />
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
