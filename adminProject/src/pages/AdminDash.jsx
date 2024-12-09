import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [editingProductId, setEditingProductId] = useState(null);
  const navigate = useNavigate();

  // Fetch users and products data
  useEffect(() => {
    axios.get("http://localhost:3000/users").then((response) => setUsers(response.data));
    axios.get("http://localhost:3000/products").then((response) => setProducts(response.data));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  
  const updateUser = (id, updatedUser) => {
    axios.put(`http://localhost:3000/users/${id}`, updatedUser).then(() => {
      setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
      setEditingUserId(null);
    });
  };

 
  const updateProduct = (id, updatedProduct) => {
    axios.put(`http://localhost:3000/products/${id}`, updatedProduct).then(() => {
      setProducts(products.map((product) => (product.id === id ? updatedProduct : product)));
      setEditingProductId(null);
    });
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
            {users.map((user) =>
              editingUserId === user.id ? (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={user.name}
                      onChange={(e) =>
                        setUsers(
                          users.map((u) =>
                            u.id === user.id ? { ...u, name: e.target.value } : u
                          )
                        )
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="email"
                      className="form-control"
                      defaultValue={user.email}
                      onChange={(e) =>
                        setUsers(
                          users.map((u) =>
                            u.id === user.id ? { ...u, email: e.target.value } : u
                          )
                        )
                      }
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-primary btn-sm me-2"
                      onClick={() => updateUser(user.id, user)}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => setEditingUserId(null)}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ) : (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => setEditingUserId(user.id)}
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
              )
            )}
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
            {products.map((product) =>
              editingProductId === product.id ? (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={product.title}
                      onChange={(e) =>
                        setProducts(
                          products.map((p) =>
                            p.id === product.id ? { ...p, title: e.target.value } : p
                          )
                        )
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      defaultValue={product.price}
                      onChange={(e) =>
                        setProducts(
                          products.map((p) =>
                            p.id === product.id ? { ...p, price: e.target.value } : p
                          )
                        )
                      }
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-primary btn-sm me-2"
                      onClick={() => updateProduct(product.id, product)}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => setEditingProductId(null)}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ) : (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.title}</td>
                  <td>${product.price.toFixed(2)}</td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => setEditingProductId(product.id)}
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
              )
            )}
          </tbody>
        </table>
      </div>

      
      <footer className="bg-dark text-white py-3 mt-5">
        <div className="container text-center">
          <p className="mb-0">© 2024 Admin Dashboard. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default AdminDashboard;
