import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "../utility/login.css";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("created...");

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
        <form onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
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

          <input type="submit" value="Submit" />

          <p>
            Already have an account?{" "}
            <Link
              to="/login"
              style={{ color: "blue", textDecoration: "underline" }}
            >
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
