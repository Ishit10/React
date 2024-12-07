import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    alert("You have been logged out.");
    navigate("/");
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <>
      
      <header className="bg-primary text-white py-4 shadow">
        <div className="container d-flex justify-content-between align-items-center">
          <h1 className="h3 mb-0">Product Dashboard</h1>
          <div>
            <span className="me-3 fs-5">Hello, {user ? user.name : "Guest"}!</span>
            <button className="btn btn-light text-primary" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </header>

      
      <div className="container mt-5">
        <h2 className="mb-4 text-center text-uppercase">Explore Our Products</h2>
        {products.length > 0 ? (
          <div className="row g-4">
            {products.map((product) => (
              <div className="col-sm-6 col-md-4 col-lg-3" key={product.id}>
                <div className="card shadow h-100 border-0">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text text-success fw-bold">
                      ${product.price.toFixed(2)}
                    </p>
                    <button className="btn btn-outline-primary btn-sm">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center mt-5">
            <p>No products available. Please try again later!</p>
          </div>
        )}
      </div>

   
      <footer className="bg-dark text-white py-3 mt-5">
        <div className="container text-center">
          <p className="mb-0">© 2024 Your Company Name. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Dashboard;
