import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router";


function Home() {
  const [products, setProducts] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  // Fetch products from API
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

  // Simplified addToCart logic
  const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = existingCart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      existingCart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));
    alert(`${product.title} added to cart!`);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    alert("You have been logged out.");
    navigate("/");
  };

  const cartItemCount = JSON.parse(localStorage.getItem("cart"))?.reduce(
    (total, item) => total + item.quantity,
    0
  ) || 0;

  return (
    <>
      {/* Navbar */}
      <header className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <h1 className="h3 mb-0">ShopEase</h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <span className="nav-link text-light">
                  Hello, {user ? user.name : "Guest"}!
                </span>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link">
                  Cart <span className="badge bg-light text-primary">{cartItemCount}</span>
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-light text-primary ms-2"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="display-4 fw-bold mb-3">Welcome to ShopEase</h2>
          <p className="lead">
            Explore a variety of products and add them to your cart with ease.
          </p>
          <Link to="/cart" className="btn btn-primary btn-lg mt-3">
            View Cart
          </Link>
        </div>
      </section>

      {/* Product List */}
      <main className="container mt-5">
        <h2 className="text-center text-uppercase mb-4">Explore Our Products</h2>
        <div className="row g-4">
          {products.map((product) => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={product.id}>
              <div className="card shadow-sm h-100 border-0">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title text-truncate">{product.title}</h5>
                  <p className="card-text text-success fw-bold mb-2">
                    ${product.price.toFixed(2)}
                  </p>
                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      

      {/* Footer */}
      <footer className="bg-dark text-white py-3 mt-5">
        <div className="container text-center">
          <p className="mb-0">© 2024 ShopEase. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Home;
