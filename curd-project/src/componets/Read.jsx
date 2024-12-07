import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function Read() {
  const [userSingleData, setuserSingleData] = useState({})
  const {userId} = useParams();
  
  useEffect(() => {
     axios.get(`http://localhost:3000/userData/${userId}`).then((response)=> {
      setuserSingleData(response.data);
     }).catch((error) => {
      console.log(error);
      
     })
  },[])
  return (
    <>
    <h1>User Details</h1>
      <p>Name: {userSingleData.name}</p>
      <p>Email: {userSingleData.email}</p>
      <Link to={"/"}>
        <button>Back</button>
      </Link>
    </>
  )
}

export default Read