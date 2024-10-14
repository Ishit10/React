import React, { useEffect, useState } from "react";

function ProductCarousel() {
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

  // Function to handle next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % productData.length);
  };

  // Function to handle previous slide
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? productData.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="container text-bg-dark my-4 p-3">
        <h1 className="text-center">Product Card</h1>

        {/* Carousel Controls */}
        <div className="d-flex justify-content-between align-items-center">
          <button className="btn btn-primary" onClick={handlePrev}>
            Previous
          </button>
          

        {/* Carousel Card */}
        <div className="carousel mt-4">
          {productData.length > 0 && (
            <div className="card mx-auto" style={{ width: "18rem" }}>
              <img
                src={productData[currentIndex].image}
                className="card-img-top"
                alt={productData[currentIndex].title}
                style={{ height: "300px", objectFit: "contain" }}
              />
              <div className="card-body">
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
              <div className="card-footer">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          )}
        </div>

        <button className="btn btn-primary" style={{ width: 100 }} onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductCarousel;