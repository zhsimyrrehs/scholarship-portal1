// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = ({ selectedFilters, setSelectedFilters }) => {
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setSelectedFilters((prev) => ({
            ...prev,
            [name]: value || null,
        }));
    };

    return (
        <div className="sidebar">
            <h3>Filter Scholarships</h3>
            <label>Age Group</label>
            <select name="age" onChange={handleFilterChange}>
                <option value="">All</option>
                <option value="18-25">18-25</option>
                <option value="25-35">25-35</option>
            </select>

            <label>Field of Study</label>
            <select name="fieldOfStudy" onChange={handleFilterChange}>
                <option value="">All</option>
                <option value="STEM">STEM</option>
                <option value="Business">Business</option>
                <option value="Arts">Arts</option>
            </select>
        </div>
    );
};

export default Sidebar;
