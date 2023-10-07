import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../Assets/DJIs-Matrice-200-V2-and-Flighthub-Enterprise-for-next-level-drone-operations-F.webp"
import { Button } from "@mui/material";
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

const Home = () => {

  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="carousel-section">
        <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active c-item">
              <img src={img} className="d-block w-100 c-img" alt={img} />
              <div className="carousel-caption ">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item c-item">
              <img src={img} className="d-block w-100 c-img" alt={img} />
              <div className="carousel-caption ">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div className="carousel-item c-item">
              <img src={img} className="d-block w-100 c-img" alt={img} />
              <div className="carousel-caption ">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </button>
        </div>
      </div>
      <div className="service-page">
        <div className="service-image">
          <img
            src=''
            alt="Drone Services"
            className="service-image"
          />
        </div>
        <div className="service-content">
          <h2 className="service-heading">What We Do</h2>
          <p className="service-text">
            Aero Knotz Services Drones Private Limited is a dynamic startup company specializing in a diverse
            range of drone-related services. With expertise in drone surveying, mapping, inspections,
            photography, videography, agricultural spraying, and captivating air shows, we bring cutting-edge
            technology to various industries and events.
          </p>
          <Button variant="contained" onClick={() => { navigate("/aboutus") }}>Learn More</Button>
        </div>
      </div>

      <div className="achivement">
        <div className="container">
          <div className="achive-logo">
          <i class="fa-solid fa-clipboard-check"/>
          </div>
          <div className="count">
            <h4>250+</h4>
          </div>
          <div className="achive-cont">
            project across country
          </div>
        </div>
        <div className="container">
          <div className="achive-logo">
          
          </div>
          <div className="count">
            <h4>2500+</h4>
          </div>
          <div className="achive-cont">
            project across country
          </div>
        </div>
        <div className="container">
          <div className="achive-logo">
            <AssignmentTurnedInIcon />
          </div>
          <div className="count">
            <h4>2500+</h4>
          </div>
          <div className="achive-cont">
            project across country
          </div>
        </div>
        <div className="container">
          <div className="achive-logo">
            <AssignmentTurnedInIcon />
          </div>
          <div className="count">
            <h4>2500+</h4>
          </div>
          <div className="achive-cont">
            project across country
          </div>
        </div>
      </div>

      <div className="service-page">
        <div className="service-content">
          <h2 className="service-heading">What We Do</h2>
          <p className="service-text">
            Aero Knotz Services Drones Private Limited is a dynamic startup company specializing in a diverse
            range of drone-related services. With expertise in drone surveying, mapping, inspections,
            photography, videography, agricultural spraying, and captivating air shows, we bring cutting-edge
            technology to various industries and events.
          </p>
          <Button variant="contained" onClick={() => { navigate("/aboutus") }}>Learn More</Button>
        </div>
        <div className="service-image">
          <img
            src=''
            alt="Drone Services"
            className="service-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
