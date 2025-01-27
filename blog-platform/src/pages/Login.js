import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "../utility/login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in successfully!");

      setEmail("");
      setPassword("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <div className="image-section">
        <img
          src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D"
          alt="Login"
        />
      </div>
      <div className="form-section">
        <form onSubmit={handleLogin} className="box">
          <h2>Login</h2>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            required
          />
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            required
          />

          <br />

          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
}
