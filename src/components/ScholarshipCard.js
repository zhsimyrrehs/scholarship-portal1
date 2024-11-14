// src/components/ScholarshipCard.js
import React from 'react';
import './ScholarshipCard.css';

const ScholarshipCard = ({ scholarship }) => {
    return (
        <div className="scholarship-card">
            <h2>{scholarship.name}</h2>
            <p>{scholarship.description}</p>
            <p><strong>Location:</strong> {scholarship.location}</p>
            <p><strong>Education Level:</strong> {scholarship.education}</p>
        </div>
    );
};

export default ScholarshipCard;
