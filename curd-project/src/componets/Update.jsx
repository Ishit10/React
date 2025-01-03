import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Update() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  function handleUpdate(event) {
    event.preventDefault();
    let obj = { name, email };

    axios
      .put(`http://localhost:3000/userData/${id}`, obj)
      .then((response) => {
        console.log(response);
        alert("User created successfully");
        setName("");
        setEmail("");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to create user");
        setName("");
        setEmail("");
      });
  }

  useEffect(() => {
    axios.get(`http://localhost:3000/userData/${id}`).then((response) => {
      console.log(response);
      setName(response.data.name);
      setEmail(response.data.email);
    });
  }, []);

  return (
    <>
    <h1>Create User</h1>
      <form action="" onSubmit={handleUpdate}>
        <input type="text" value={name} placeholder='Enter your Name' onChange={(e) => setName(e.target.value)} />
        <br />
        <input type="email" value={email} placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
        <button>Submit</button>
      </form>
    
    </>
  )
}

export default Update