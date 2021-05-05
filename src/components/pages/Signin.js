import React from 'react';

function Signin() {
  return (
    <div class="main_div">
    <div class="box">
      <h1>SignIn Form</h1>
      <h6>(For Teaching Staff)</h6>
      <form action="">
        <div class="input-box">
          <input
            type="text"
            name="Username"
            id="name"
            autocomplete="off"
            required
          />
          <label for="Username">Username</label>
        </div>
        <div class="input-box">
          <input
            type="password"
            name="password"
            id="name"
            autocomplete="off"
            required
          />
          <label for="Password">Password</label>
        </div>
        <input type="submit" value="Signin" />
      </form>
    </div>
  </div>
  );
}

export default Signin;
