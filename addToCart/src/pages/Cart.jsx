import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Cart() {
  const navigate = useNavigate();

  const getCartFromLocalStorage = () => {
    try {
      return JSON.parse(localStorage.getItem("cart")) || [];
    } catch (error) {
      console.error("Error parsing cart data:", error);
      return [];
    }
  };

  const [cart, setCart] = useState(getCartFromLocalStorage());

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (isNaN(quantity) || quantity < 1) return;
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const handleCheckout = () => {
    alert("Thank you for your purchase!");
    setCart([]); 
    navigate("/"); 
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const formatPrice = (price) => Number(price.toFixed(2));

  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center">Your Cart</h1>
      {cart.length > 0 ? (
        <div className="row">
          
          <div className="col-lg-8">
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <table className="table table-hover table-bordered">
                  <thead className="table-light">
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => (
                      <tr key={item.id}>
                        <td>{item.title}</td>
                        <td>${formatPrice(item.price)}</td>
                        <td>
                          <input
                            type="number"
                            value={item.quantity}
                            className="form-control"
                            style={{ width: "80px" }}
                            onChange={(e) =>
                              updateQuantity(item.id, parseInt(e.target.value, 10))
                            }
                          />
                        </td>
                        <td>${formatPrice(item.price * item.quantity)}</td>
                        <td>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => removeFromCart(item.id)}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          
          <div className="col-lg-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h4 className="mb-4">Order Summary</h4>
                <p><strong>Grand Total:</strong> ${formatPrice(cart.reduce((total, item) => total + item.price * item.quantity, 0))}</p>
                <button className="btn btn-success w-100" onClick={handleCheckout}>
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="alert alert-info text-center" role="alert">
          Your cart is empty!
        </div>
      )}
    </div>
  );
}

export default Cart;
