// src/App.js
import React, { useState, useEffect } from 'react';
import ScholarshipCard from './components/ScholarshipCard';
import Sidebar from './components/Sidebar';
import Quote from './components/Quote';
import Login from './components/Login';
import Signup from './components/Signup';
import scholarshipsData from './data/scholarships.json';
import './App.css';

function App() {
    const [scholarships, setScholarships] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedFilters, setSelectedFilters] = useState({
        age: null,
        fieldOfStudy: null,
    });
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);

    useEffect(() => {
        setScholarships(scholarshipsData);
    }, []);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
    };

    const filteredScholarships = scholarships.filter((scholarship) => {
        const matchesSearch = scholarship.name.toLowerCase().includes(searchQuery) || scholarship.description.toLowerCase().includes(searchQuery);
        const matchesAge = selectedFilters.age ? scholarship.age === selectedFilters.age : true;
        const matchesFieldOfStudy = selectedFilters.fieldOfStudy ? scholarship.fieldOfStudy === selectedFilters.fieldOfStudy : true;
        return matchesSearch && matchesAge && matchesFieldOfStudy;
    });

    return (
        <div className="App">
            <header>
                <h1>Scholarship Portal</h1>
                <div className="auth-buttons">
                    <button onClick={() => setShowLogin(true)}>Login</button>
                    <button onClick={() => setShowSignup(true)}>Sign Up</button>
                </div>
            </header>
            <div className="main-content">
                <Sidebar selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
                <div className="scholarships-section">
                    <input
                        type="text"
                        placeholder="Search scholarships..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="search-bar"
                    />
                    <div className="scholarships-container">
                        {filteredScholarships.length === 0 ? (
                            <p>No scholarships found</p>
                        ) : (
                            filteredScholarships.map((scholarship) => (
                                <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
                            ))
                        )}
                    </div>
                </div>
                <Quote />
            </div>
            {showLogin && <Login onClose={() => setShowLogin(false)} />}
            {showSignup && <Signup onClose={() => setShowSignup(false)} />}
        </div>
    );
}

export default App;
