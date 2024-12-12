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
            navigate("/Home");
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
    <section className="vh-100 bg-light">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-4">
            <div
              className="card shadow-sm"
              style={{ borderRadius: "1rem", backgroundColor: "#f8f9fa" }}
            >
              <div className="card-body p-4 text-center">
                <form onSubmit={(e) => e.preventDefault()}>
                  <h2 className="fw-bold mb-4 text-primary">Login</h2>
                  <p className="text-muted mb-4">Please enter your credentials.</p>
                  {error && <div className="alert alert-danger">{error}</div>}
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="d-grid gap-2 mb-4">
                    <button
                      className="btn btn-primary btn-lg"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Login
                    </button>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button
                      className="btn btn-outline-primary btn-lg"
                      type="button"
                      onClick={handleRegistration}
                    >
                      Create Account
                    </button>
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
