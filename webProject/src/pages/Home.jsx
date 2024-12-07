import React, { useEffect, useState } from 'react'
import NavBar from '../component/NavBar'
import { Outlet } from 'react-router-dom'

function home() {
  const [productData, setProductData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch product data from Fake Store API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProductData(data);
      } catch (error) {
        console.log("Error fetching data");
      }
    };
    fetchData();
  }, []);



  return (
    <>
    <NavBar/>
    <Outlet/>


    <div className="container-fuild text-bg-dark my-4 p-3">
        <h1 className="text-center text-decoration-underline text-primary">Product Card</h1>

        {/* Carousel Controls */}
        <div className="d-flex justify-content-between align-items-center">
          
          

        {/* Carousel Card */}
        <div className="carousel mt-4">
          {productData.length > 0 && (
            <div className="card mx-auto bg-info" style={{ width: "18rem" }}>
              <img
                src={productData[currentIndex].image}
                className="card-img-top"
                alt={productData[currentIndex].title}
                style={{ height: "300px", objectFit: "contain" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">
                  {productData[currentIndex].title.slice(0, 20)}
                </h5>
                <p className="card-text">
                  {productData[currentIndex].description.slice(0, 80)}...
                </p>
                <p className="card-text fw-bold">
                  ${productData[currentIndex].price}
                </p>
              </div>
              <div className="card-footer bg-success text-center">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          )}
        </div>

        
        </div>
      </div>
    </>
  )
}

export default home