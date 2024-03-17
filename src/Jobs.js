// Import React, useState, useEffect, and the job listings from JSON file
import React, { useState, useEffect } from 'react';
import jobListings from './Jobs.json'; // Import job listings from JSON file
import './jobs.css'; // Import your CSS file here

// Define the Jobs component
function Jobs() {
  // Define state variables using useState
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [termsChecked, setTermsChecked] = useState(false);
  const [filteredJobs, setFilteredJobs] = useState(jobListings);

  // useEffect to populate job listings when filteredJobs state changes
  useEffect(() => {
    populateJobListings(filteredJobs);
  }, [filteredJobs]);

  // Function to populate job listings dynamically
  const populateJobListings = (listings) => {
    const jobListingsContainer = document.getElementById('job-listings');
    jobListingsContainer.innerHTML = ""; // Clear existing content or extra apply button
  
    listings.forEach(job => {
      const jobElement = document.createElement('div');
      jobElement.classList.add('job');
      jobElement.innerHTML = `<h2>${job.title}</h2>
                              <p>Type: ${job.type}</p>
                              <p>Location: ${job.location}</p>
                              <p>Posted Date: ${job.postedDate}</p>
                              <button class="apply-button">Apply</button>`; // Removed onClick attribute
      jobElement.querySelector('.apply-button').addEventListener('click', () => { // Added event listener for click event
        alert(`You applied for the job: ${job.title}`);
      });
  
      jobListingsContainer.appendChild(jobElement);
    });
  };

  // Function to validate subscription form
  const validateForm = () => {
    if (name.trim() === '' || email.trim() === '' || !isValidEmail(email)) {
      alert('Please fill out all fields correctly.');
      return false;
    }
    if (!termsChecked) {
      alert('Please agree to the terms of service to get job listings!');
      return false;
    }
    return true;
  };

  // Function to check if email is valid
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Function to clear form inputs
  const clearFormInputs = () => {
    setName('');
    setEmail('');
    setLocation('');
    setTermsChecked(false);
  };

  // Function to handle subscription form submission
  const subscribe = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (validateForm()) {
      alert(`Thank you, ${name}! You've successfully subscribed.\nEmail: ${email}\nLocation: ${location}`);
      clearFormInputs();
    }
  };

  // Function to filter jobs based on search input
  const filterJobs = () => {
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput.value.toLowerCase();
    const filteredJobs = jobListings.filter(job => job.title.toLowerCase().includes(searchTerm));
    setFilteredJobs(filteredJobs);
  };

  // Render JSX
  return (
    <div>
      <body> {/* This is not a valid usage of the body tag */}
        <section>
          <h1 className='top'>IT Jobs</h1>
          <section id="job-search">
            <input
              type="text"
              id="search-input"
              placeholder="Search Jobs"
              onChange={filterJobs}
            />
          </section>
        </section>
      </body>
      <main className="Listings">
        <section id="job-listings">
          {/* Job listings will be populated here */}
        </section>
        <aside id="subscribe-section">
          <div id="subscribe-form">
            <h3>Sign Up For Job Alerts!</h3>
            <form id="subscription-form" onSubmit={subscribe}>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
              <label>
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  checked={termsChecked}
                  onChange={(e) => setTermsChecked(e.target.checked)}
                />
                I agree to the terms of service and privacy policy.
              </label>
              <button type="submit">Send Me Jobs</button>
            </form>
          </div>
        </aside>
      </main>
    </div>
  );
}

// Export the Jobs component
export default Jobs;
