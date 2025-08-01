import React,{ useState } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js'
import './App.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'

function App() {

 const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleBookClick = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);


  const [formData, setFormData] = useState({
    date: "",
    time: "",
    people: 1,
    firstName: "",
    lastName: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic frontend validation (improvements suggested for production)
    if (
      !formData.date ||
      !formData.time ||
      !formData.firstName ||
      !formData.lastName ||
      !formData.email
    ) {
      alert("Please fill out all fields.");
      return;
    }
    // Replace with actual booking handler (API call, etc.)
    console.log("Reservation info:", formData);
    alert("Reservation submitted!");
  };

  return (
    <body className="App">
      <Header onBookClick={handleBookClick} />
      <Popup open={isPopupOpen} onClose={closePopup} modal>
           <button onClick={closePopup}>Close</button>
          {/* Your popup content here */}
           <div></div>
    <form className='form' onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "2rem auto" }}>
      <h2>Book a Table</h2>

      <label className='input-sec'>
        Date:
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label className='input-sec'>
        Time:
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label className='input-sec'>
        Number of people:
        <input
          type="number"
          name="people"
          min="1"
          max="20"
          value={formData.people}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label className='input-sec'>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label className='input-sec'>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label className='input-sec'>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <button type="submit">Book Now</button>
    </form>
      </Popup>
          <Main/>
           <Footer/>
    </body>
  );
}


export default App;
