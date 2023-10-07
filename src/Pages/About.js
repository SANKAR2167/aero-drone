import React from 'react'
import "./css/About.css";
import drone from "../Assets/blue drone.png"
export default function About() {
  return (
    <div className="about-page">
      <div className="about-content">
        <h2 className="about-heading">About Us</h2>
        <p className="about-text">
          Aero Knotz Services Drones Private Limited is a dynamic startup company specializing in a diverse
          range of drone-related services. With expertise in drone surveying, mapping, inspections,
          photography, videography, agricultural spraying, and captivating air shows, we bring cutting-edge
          technology to various industries and events. <br /><br />
          Our commitment to excellence is unwavering, and we prioritize safety, quality, and customer
          satisfaction in all our operations. With a team of skilled professionals and state-of-the-art equipment,
          we offer innovative solutions tailored to meet the unique needs of our clients. <br /><br />
          Whether it's capturing breathtaking aerial views, conducting precise inspections, optimizing
          agriculture practices, or delivering awe-inspiring air shows, Aero Knotz Drone Services is your trusted
          partner for leveraging the power of drones. We are dedicated to pushing the boundaries of what drone
          technology can achieve and look forward to serving your specific requirements
        </p>
      </div>
      <div className="about-image">
        <img
          src={drone}
          alt="About Us"
          className="about-image"
        />
      </div>
    </div>
  );
}

