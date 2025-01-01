import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegistration = () => {
    navigate("/register"); 
  };

  const handleSubmit = () => {
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    axios
      .get("http://localhost:3000/users") 
      .then((response) => {
        const users = response.data;
        const user = users.find(
          (u) => u.email === email && u.password === password
        );

        if (user) {
         
          localStorage.setItem("user", JSON.stringify(user));
          navigate("/rooms");
        } else {
          setError("Invalid email or password.");
        }
      })
      .catch(() => {
        setError("Error connecting to the server. Please try again later.");
      });
  };

  return (
    <section className="vh-100 gradient-custom">
      <h1 className="text-center">Welcome to Hotel Management System</h1>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card bg-dark text-white"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 text-center">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">
                      Please enter your login and password!
                    </p>
                    {error && <p className="text-danger">{error}</p>}
                    <div className="form-outline form-white mb-4">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-outline form-white mb-4">
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="d-flex gap-3 justify-content-center">
                      <button
                        className="btn btn-outline-light btn-lg px-5"
                        type="button"
                        onClick={handleSubmit}
                      >
                        Login
                      </button>
                      <button
                        className="btn btn-outline-light btn-lg px-5"
                        type="button"
                        onClick={handleRegistration}
                      >
                        Create Account
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
