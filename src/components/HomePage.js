import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import image1 from './assets/WhatsApp Image 2024-11-17 at 14.56.48_efc3ce9a.jpg';
import image2 from './assets/WhatsApp Image 2024-11-17 at 14.56.47_5c445bee.jpg';


{/*
const HomePage = () => {
  return (
    <div className="text-center">
      <h1>Welcome to the Blood Management System</h1>
      <p>
        <Link to="/register" className="btn btn-primary m-2">Register</Link>
        <Link to="/login" className="btn btn-secondary m-2">Login</Link>
        
        <Link to="/admin" className="btn btn-warning m-2">Admin Panel</Link>
       
        <Link to="/feedback" className="btn btn-secondary m-2">Feedback</Link>
        <Link to="/updates" className="btn btn-info m-2">Real-Time Updates</Link>
      </p>
    </div>
  );
};

export default HomePage;*/}
//import React from 'react';

const Navbar = () => (
  <nav className="navbar navbar-expand-sm bg-warning">
    <div className="container-fluid">
      <a href="#" className="navbar-brand">BloodConnect</a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#menu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="menu">
      <Link to="/register" className="btn btn-primary m-2">Register</Link>
        <Link to="/login" className="btn btn-secondary m-2">Login</Link>
        
        <Link to="/admin" className="btn btn-warning m-2">Admin Panel</Link>
       
        <Link to="/feedback" className="btn btn-secondary m-2">Feedback</Link>
        <Link to="/updates" className="btn btn-info m-2">Real-Time Updates</Link>
      </div>
    </div>
  </nav>
);

const Card = ({ imgSrc, title, text }) => (
  <div className="card" style={{ width: '18rem' }}>
    <img src={imgSrc} className="card-img-top" alt={title} />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
);



const Carousel = () => (
  <div
    id="carouselExample"
    className="carousel slide w-100 justify-content-center"
    data-bs-ride="carousel"
    data-bs-interval="2000"
  >
    <div className="carousel-inner">
      {['life.webp', 'life2.png', 'life3.png', 'life44.jpg'].map((image, index) => (
        <div
          key={index}
          className={`carousel-item ${index === 0 ? 'active' : ''}`}
        >
          <img
            src={`./assets/${image}`}
            className="d-block w-100"  // Adjusted to fill the container width
            alt={`Slide ${index + 1}`}
          />
        </div>
      ))}
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
);


const AboutUs = () => (
    <div className="container-fluid p-5">
      <div className="row">
        <div className="bg-dark">
          {/* First Row */}
          <div className="row">
            <div className="col-sm-8 bg-dark text-white">
              <h1>About Us</h1>
              <p>
                We are Team Code Catalyst, a group of passionate innovators committed to making a difference in healthcare through technology. <br />
                <b>Our team—Sharanya Velagandula, Sai Priya Kesoju, Udayasri Manne, and Nandini Vulli</b>—shares a common goal: to revolutionize hospital management and blood donation systems with cutting-edge solutions. <br />
                Our journey began with a simple question: What if we could make lifesaving resources accessible with just a tap? Inspired by this challenge, we embarked on creating a revolutionary app designed to bridge the gap between blood donors and those in urgent need. At its core, our mission is to ensure that no life is lost due to delays in finding blood—a resource as vital as life itself. <br />
                But we are more than just developers. We are catalysts of change, merging cutting-edge technology with a deep sense of purpose. Through our app, we aim to empower individuals to step up as everyday heroes, turning small acts of kindness into monumental impacts. From urban hospitals to rural communities, from individual donors to large organizations, we envision a world where every blood donation is a story of hope and humanity.
              </p>
            </div>
            <div className="col-sm-4 bg-dark text-white border border-5">
            <img src={image1} className="w-100" alt="Team Code Catalyst" />
            </div>
          </div>

          {/* Second Row */}
          <div className="row">
            <div className="col-sm-4 text-white border border-5">
            <img src={image2} className="w-100" alt="Vision" />
            </div>
            <div className="col-sm-8 text-white border border-5">
              <p>
                We’re not just coding solutions; we’re crafting a vision for the future. Our project is about more than technology—it’s about resilience, compassion, and creating a world where no one has to wait for the most precious gift: a chance at life. Through collaboration and dedication, we aim to revolutionize healthcare, one connection at a time. <br />
                Let’s innovate. Let’s inspire. Let’s ignite change—because together, we can make saving lives as simple and seamless as it should be. <br />
                Our team thrives on creativity, collaboration, and a relentless pursuit of excellence. With expertise in frontend and backend development, real-time communication systems, and geolocation integration, we are building not just an app but a legacy—a tool that brings people together in moments that matter most. <br />
                We believe that saving lives isn’t just about technology; it’s about empathy, resilience, and a shared commitment to make the world a better place. Together, we’re turning a bold idea into a powerful movement, redefining how healthcare operates in emergencies and beyond. <b> <br />
                  Join us on this journey—because every drop of blood counts, and together, we can make every second count too.
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );




const HomePage = () => (
  <div>
    <style>
      {`
        body {
          background: linear-gradient(68.6deg, rgb(252, 165, 241) 1.8%, rgb(181, 255, 255) 100.5%);
        }
      `}
    </style>
    <Navbar />
    <h1 className="display-2 text-primary">Welcome user</h1>
    <div className="container-fluid text-white d-flex justify-content-between flex-wrap">
      <Card
        imgSrc="./assets/help-handwritten-blood-260nw-2787135.webp"
        title="A Lifesaving Connection"
        text="Did you know that a single blood transfusion can save multiple lives?..."
      />
      <Card
        imgSrc="./assets/istockphoto-1319068178-612x612.jpg"
        title="Every Drop Counts"
        text="Whether it’s replenishing lost blood or supporting patients in emergencies..."
      />
      <Card
        imgSrc="./assets/istockphoto-1467882324-612x612.jpg"
        title="Life Saver"
        text="Your generosity can give someone a second chance at life..."
      />
      <Card
        imgSrc="./assets/istockphoto-1319068178-612x612.jpg"
        title="Give Hope"
        text="Donating is a gift that keeps on giving, changing lives one person at a time..."
      />
    </div>
    <div className="container-fluid p-5 text-white">
      <h4>
        In a world where every second counts, we’re here to turn urgency into action...
      </h4>
    </div>
    <Carousel />
    <AboutUs />
    <div className="container-fluid">
      <h3 className="p-2">
        <b>THIS ISN’T JUST AN APP —IT’S A MOVEMENT FOR A SAFER AND MORE CONNECTED WORLD!!</b>
      </h3>
    </div>
  </div>
);

export default HomePage;
