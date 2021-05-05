import React from 'react';

function Signin() {
  return (
    <div class="main_div">
    <div class="box">
      <h1>SignUp Form</h1>
      <h6>(For Teaching Staff)</h6>
      <form action="">
        <div class="input-box">
          <input
            type="email"
            name="email"
            id="email"
            autocomplete="off"
            required
          />
          <label for="Username">Email</label>
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
        <input type="submit" value="Signup" />
      </form>
    </div>
  </div>
  );
}

export default Signin;
