import React from 'react';
import "./AboutUs.css";
import banner from "../images/career.jpg";

const AboutUs = () => {
  return (
    <section className="about">
        <div className="main">
            <img src={banner} alt=""></img>
            <div className="about-text">
                <h1>Our Goal</h1>
                <p>Afraid of <span style={{color: "var(--dark-greyish)", fontWeight: "bold"}}>LayOff's </span>? Don't Worry!</p>
                <p>Career Connector strives to put job seekers first, giving them free access to search for jobs, post, and connect recruiters across the country. Every day, we connect thousands of people to new opportunities.</p>
            </div>
        </div>
        <br></br>
        <hr/>
    </section>
  )
}

export default AboutUs