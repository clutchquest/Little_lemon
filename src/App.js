import React from 'react';
import {BrowserRouter ,Routes, Route  } from 'react-router-dom';
import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';
import FadeInSection from './components/Main/FadeIn/FadeInSection.jsx';
import Booking from'./components/Booking/Booking.js'
import Footer from './components/Footer/Footer.js'
import './App.css';
import 'reactjs-popup/dist/index.css'

function App() {
  return(
    <body className="App">
     <BrowserRouter>
       <Routes>
          <Route path="/Booking" element={<Booking />} />
           <Route path="/" element={
          <>
            <Header />
            <FadeInSection/>
            <Main />
            <Footer/>
          </>
        } />
       </Routes>
     </BrowserRouter>
     
    </body>
    
  );


}


export default App;
