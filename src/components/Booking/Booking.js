import {useState} from 'react';
import './Booking.css' 
function Booking(){
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
    return(
      <body classname='Bookingbody'>
         <form  className='form' onSubmit={handleSubmit} style={{ maxWidth: 700, margin: "5rem auto" }}>
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
          <div className='center'>
            <button type="submit" className='submit-btn'>Book Now</button>
          </div>
         </form>
    </body>

    );
}

 export default Booking;  