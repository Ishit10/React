import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  
  useEffect(() => {
    axios.get("http://localhost:3000/users").then((response) => setUsers(response.data));
    axios.get("http://localhost:3000/products").then((response) => setProducts(response.data));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };


  const deleteUser = (id) => {
    axios.delete(`http://localhost:3000/users/${id}`).then(() => {
      setUsers(users.filter((user) => user.id !== id));
    });
  };

  
  const deleteProduct = (id) => {
    axios.delete(`http://localhost:3000/products/${id}`).then(() => {
      setProducts(products.filter((product) => product.id !== id));
    });
  };

  return (
    <>
     
      <header className="bg-primary text-white py-4 shadow">
        <div className="container d-flex justify-content-between align-items-center">
          <h1 className="h3 mb-0">Admin Dashboard</h1>
          <button className="btn btn-light text-primary" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>

      
      <div className="container mt-5">
        <h2 className="mb-4">User Management</h2>
        <table className="table table-bordered table-striped">
          <thead className="table-primary">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => setSelectedUser(user)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="mt-5 mb-4">Product Management</h2>
        <table className="table table-bordered table-striped">
          <thead className="table-success">
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>${product.price.toFixed(2)}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => setSelectedProduct(product)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteProduct(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
      <footer className="bg-dark text-white py-3 mt-5">
        <div className="container text-center">
          <p className="mb-0">© 2024 Admin Dashboard. All rights reserved.</p>
        </div>
      </footer>

      {/* Edit User Modal */}
      {selectedUser && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit User</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSelectedUser(null)}
                ></button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control mb-3"
                  value={selectedUser.name}
                  onChange={(e) =>
                    setSelectedUser({ ...selectedUser, name: e.target.value })
                  }
                />
                <input
                  type="email"
                  className="form-control"
                  value={selectedUser.email}
                  onChange={(e) =>
                    setSelectedUser({ ...selectedUser, email: e.target.value })
                  }
                />
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setSelectedUser(null)}
                >
                  Close
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    axios
                      .put(
                        `http://localhost:3000/users/${selectedUser.id}`,
                        selectedUser
                      )
                      .then(() => {
                        setUsers(
                          users.map((u) =>
                            u.id === selectedUser.id ? selectedUser : u
                          )
                        );
                        setSelectedUser(null);
                      });
                  }}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      
      {selectedProduct && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Product</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSelectedProduct(null)}
                ></button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control mb-3"
                  value={selectedProduct.title}
                  onChange={(e) =>
                    setSelectedProduct({ ...selectedProduct, title: e.target.value })
                  }
                />
                <input
                  type="number"
                  className="form-control"
                  value={selectedProduct.price}
                  onChange={(e) =>
                    setSelectedProduct({ ...selectedProduct, price: e.target.value })
                  }
                />
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setSelectedProduct(null)}
                >
                  Close
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    axios
                      .put(
                        `http://localhost:3000/products/${selectedProduct.id}`,
                        selectedProduct
                      )
                      .then(() => {
                        setProducts(
                          products.map((p) =>
                            p.id === selectedProduct.id ? selectedProduct : p
                          )
                        );
                        setSelectedProduct(null);
                      });
                  }}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AdminDashboard;
