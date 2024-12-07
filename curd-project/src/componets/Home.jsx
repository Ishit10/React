import axios from "axios";
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [userData, setuserData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/userData").then((response) => {
      setuserData(response.data);
    })
  }, [])


  const  handleDelete = (id) => {
    axios.delete(`http://localhost:3000/userData/${id}`).then(() => {
      alert("User delete successfully");
      setuserData(userData.filter((user) => user.id !== id));
      navigate("/")
    }).catch((error) => {
      console.log(error);
      
    })
  }

  return (
    <>
      <h1>List of User</h1>
      <Link to={"/create"}><button>Create user</button></Link>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userData && userData.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Link to={`/update/${user.id}`}>
                    <button>Edit</button>
                  </Link>
                  <Link to={`/delete/${user.id}`}>
                    <button onClick={() => {
                      handleDelete(user.id);
                    }}>Delete</button>
                  </Link>
                  <Link to={`/read/${user.id}`}>
                    <button>read</button>
                  </Link>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

    </>
  )
}

export default Home