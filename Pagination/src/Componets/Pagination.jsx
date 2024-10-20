import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function Pagination() {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const respones = await fetch('https://jsonplaceholder.typicode.com/posts');
                const result = await respones.json();
                setData(result);
            } catch (error) {
                console.log("Error data", error);

            }
        };
        fetchData();
    }, []);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const CurrentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > totalPages) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    return (
        <>
            <div className='container mt-5'>
                <h2 className='text-center'>Pagination</h2>

                <ul className="list-group">
                    {CurrentItems.map((item) => (
                        <li key={item.id} className="list-group-item">
                            <h5>{item.title}</h5>
                            <p>{item.body}</p>
                        </li>
                    ))}
                </ul>

                <nav className='d-flex justify-content-center mt-4'>
                    <ul className='pagination'>
                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                            <button className='page-link' onClick={handlePrev}>Previous</button>
                        </li>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                            <li key={pageNumber} className={`page-item ${currentPage === pageNumber ? 'active' : ''}`}>
                                <button className='page-link' onClick={() => handlePageChange(pageNumber)}>{pageNumber}</button>
                            </li>
                        ))}

                        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                            <button className="page-link" onClick={handleNext}>Next</button>
                        </li>

                    </ul>
                </nav>
            </div>

        </>
    )
}

export default Pagination