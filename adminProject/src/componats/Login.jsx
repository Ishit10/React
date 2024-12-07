import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegistration = () => {
    navigate("/registration"); 
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
          if (user.isAdmin) {
            navigate("/admin-Dashboard"); 
          } else {
            navigate("/Dashboard"); 
          }
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
                    {error && <p style={{ color: "red" }}>{error}</p>}
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
                        type="submit"
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
