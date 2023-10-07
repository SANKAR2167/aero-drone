import React from 'react'
import "./css/Service.css";
import drone from "../Assets/blue drone.png"
export default function Service() {
  return (
    <div className="service">
      <div className="service-page s-sec-1">
        <div className="service-image">
          <img
            src={drone}
            alt="Drone Services"
            className="service-image"
          />
        </div>
        <div className="service-content">
          <h2 className="service-heading">What's your industry</h2>
          <p className="service-text">
            We provide extraordinary drone services for power line monitoring, road
            inspection, smart city, Mine survey, Industrial survey, Pipeline survey, Agricultural
            survey, Railway survey, River mapping, Disaster management by taking care of
            client needs in line with Industry 4.0.
          </p>
        </div>
      </div>
      <div className="service-page s-sec-2">
        <div className="service-content">
          <h2 className="service-heading">Why Enterprises Choose Us</h2>
          <p className="service-text">
            Aero Knotz Services Drones Private Limited, We combine expertise, innovation,
            and a customer-centric approach to provide comprehensive, safe, and efficient
            drone solutions tailored to their specific projects and industries.
          </p>
        </div>
        <div className="service-image">
          <img
            src={drone}
            alt="Drone Services"
            className="service-image"
          />
        </div>

      </div>
    </div>
  );
}
