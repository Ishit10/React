import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

function Registration() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogIn = () => {
    navigate("/"); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!userName || !email || !password) {
      setError("Please fill all the fields.");
      return;
    }

    const user = { userName, email, password };
    
    axios
      .post("http://localhost:3000/users", user)
      .then((response) => {
        console.log("User registered:", response.data);
        alert("User created successfully!");
        setUserName("");
        setEmail("");
        setPassword("");
        setError("");
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error("Error creating user:", error);
        alert("Failed to create user. Please try again later.");
      });
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "#f4f6f9" }}>
      <div className="container h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-10">
            <div className="card text-black" style={{ borderRadius: "10px" }}>
              <div className="card-body p-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5">
                    <h2 className="fw-bold mb-5 text-center text-primary">Sign Up</h2>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Enter your username"
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                        />
                      </div>
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
                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          defaultValue=""
                          id="form2Example3c"
                        />
                        <label className="form-check-label" htmlFor="form2Example3">
                          I agree to all the statements in{" "}
                          <a href="#!">Terms of Service</a>
                        </label>
                      </div>
                      <div className="d-flex justify-content-center gap-2 mx-4 mb-3 mb-lg-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg px-5"
                        >
                          Register
                        </button>
                        <button
                          type="button"
                          className="btn btn-secondary btn-lg px-5"
                          onClick={handleLogIn}
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sign Up"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Registration;
