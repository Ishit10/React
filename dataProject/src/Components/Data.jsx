import React, { useState, useEffect } from "react";
import axios from "axios";

function Data() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((response) => setData(response.data))
      .catch((error) => {
        console.error("Error fetching data:", error);
        setData([]);
      });
  }, []);

  const sortData = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });

    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === "ascending" ? -1 : 1;
      if (a[key] > b[key]) return direction === "ascending" ? 1 : -1;
      return 0;
    });
    setData(sortedData);
  };

  const filteredData = data
    .filter((item) => filter === "All" || item.gender === filter)
    .filter((item) => item.name?.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Men & Women Database</h1>
      <div className="d-flex mb-4">
        <input
          type="text"
          className="form-control me-3"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="form-select"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th onClick={() => sortData("id")}>ID</th>
            <th onClick={() => sortData("name")}>Name</th>
            <th onClick={() => sortData("age")}>Age</th>
            <th onClick={() => sortData("gender")}>Gender</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Data;
