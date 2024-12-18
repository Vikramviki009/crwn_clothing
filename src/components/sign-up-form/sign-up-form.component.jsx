import React from "react";

function SignUpForm() {
  return (
    <div>
      <h1>Sign In with your email and password</h1>
      <form onSubmit={(e) => console.log(e)}>
        <label>Display Name</label>
        <input type="text" required />
        <label>Email</label>
        <input type="email" required />
        <label>Password</label>
        <input type="password" required />
        <label>Confirm Password</label>
        <input type="password" required />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default SignUpForm;
