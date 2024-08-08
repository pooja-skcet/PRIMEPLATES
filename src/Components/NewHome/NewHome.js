import React from 'react';
import './NewHome.css';
import i1 from './Images/breakfast.jpg';
import i2 from './Images/lunch.avif';
import i3 from './Images/dinner.webp';
import i4 from './Images/platinum.jpeg';
import i5 from './Images/silver.webp';
import logo from './Images/Logo (1).png';
 
import { useNavigate } from 'react-router-dom';
import WhyChooseUs from '../Home/WhyChooseUs';

const NewHome = () => {
  const nav = useNavigate();

  const handleSignin = () => {
    nav("/GetStarted");
  };

  const handleMenu = () => {
    nav("/WeekMenu");
  };

  return (
    <div className="home-page0">
      <header className="header0">
        <div className="logo0">
          <img src={logo} alt="PrimePlates" />
        </div>
        <nav className="nav0">
          <a href="/AboutUs">About Us</a>
          <a href="/Package">Packages</a>
          <a href="/WeekMenu">Our Menu</a>
          <a href="/CustomOrder">Custom Order</a>
          <a href="/Contact">Contact</a>
        </nav>
        <button className="btn0" onClick={handleSignin}>Get Started</button>
      </header>
      
      <section className="hero0">
        <div className="hero0-text">
          <h1>Every meal is a celebration of flavors!</h1>
          <p>We transform every bite into a memorable experience with our vibrant, mouthwatering Indian dishes. Dive into a world where every meal feels like a festive celebration!</p>
          <button className="btn0" onClick={handleMenu}>View Our Menus</button>
        </div>
        <div className="hero0-image">
          <img src="https://img.traveltriangle.com/blog/wp-content/uploads/2022/01/Famous-Food-Of-South-India1.jpg" alt="Festive spread of Indian dishes" />
        </div>
      </section>
      
      <div className="services-section">
        <h2>SERVICES</h2>
      </div>
      <section className="services0">
        <div className="service-card0">
          <img src={i1} alt="Breakfast" className="card-image0" />
          <h3>Breakfast</h3>
          <p>Kickstart your day with our flavorful Indian breakfast selection, featuring everything from crispy dosas to spicy poha. Each dish is crafted to bring a delicious and energizing start to your morning!</p>
          <a href="/WeekMenu" className="more-info0">More Info</a>
        </div>
        <div className="service-card0">
          <img src={i2} alt="Lunch" className="card-image0" />
          <h3>Lunch</h3>
          <p>Savor a vibrant lunch at Food Mess with our array of authentic Indian dishes, from rich curries to fragrant biryanis. Each bite is designed to satisfy your hunger and delight your taste buds!</p>
          <a href="/WeekMenu" className="more-info0">More Info</a>
        </div>
        <div className="service-card0">
          <img src={i3} alt="Dinner" className="card-image0" />
          <h3>Dinner</h3>
          <p>End your day on a high note with our exquisite dinner offerings at Food Mess. Enjoy a diverse menu of delectable Indian dishes, perfect for a comforting and satisfying evening meal.</p>
          <a href="/WeekMenu" className="more-info0">More Info</a>
        </div>
      </section>
      
      <div className="services-section">
        <h2>OUR PACKAGES</h2>
      </div>
      <section className="packages0">
        <div className="package-card0">
          <img src={i4} alt="Premium Package" className="card-image0" />
          <h3>Premium Package</h3>
          <p>The Premium Package delivers an exquisite dining experience with gourmet dishes, including premium meats, seafood, and international cuisines for a luxurious meal.</p>
          <a href="/Package" className="more-info0">More Info</a>
        </div>
        <div className="package-card0">
          <img src={i5} alt="Standard Package" className="card-image0" />
          <h3>Standard Package</h3>
          <p>The Standard Package offers a sumptuous selection of rich curries, flavorful biryanis, and delectable sides, providing elegance and comfort in every meal.</p>
          <a href="/Package" className="more-info0">More Info</a>
        </div>
        <div className="package-card0">
          <img src={i4} alt="Health Package" className="card-image0" />
          <h3>Health Package</h3>
          <p>The Health Package features balanced, nutritious meals with fresh, wholesome ingredients. Enjoy healthy options like grilled vegetables, lean proteins, and whole grains.</p>
          <a href="/Package" className="more-info0">More Info</a>
        </div>
        <div className="package-card0">
          <img src={i5} alt="Student Package" className="card-image0" />
          <h3>Student Package</h3>
          <p>The Student Package provides convenient, affordable meals with hearty dishes that are delicious and filling, perfect for the busy student lifestyle.</p>
          <a href="/Package" className="more-info0">More Info</a>
        </div>
      </section>
      
      <div className="banner">
        <WhyChooseUs />
      </div>
      
      <footer className="footer0">
        <div className="footer-content0">
          <p>We're ready when you are</p>
          <a href="/Contact" className="footer-contact-button0">Contact Us</a>
        </div>
      </footer>
    </div>
  );
};

export default NewHome;
