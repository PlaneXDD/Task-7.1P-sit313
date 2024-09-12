// src/components/Login.js
import React, { useState } from 'react';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log("Logged in:", userCredential.user);
        // Redirect or perform actions on successful login
      })
      .catch((error) => {
        setError("Invalid email or password");
        console.error("Login failed:", error);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your password"
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p>
        Don't have an account? 
        <Link to="/register"> Sign up</Link>
      </p>
    </div>
  );
}

export default Login;
