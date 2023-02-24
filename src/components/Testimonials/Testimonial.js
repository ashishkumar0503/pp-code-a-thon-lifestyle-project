import React, { useState } from "react";
import './Testimonial.css';
import { testimonialData } from "../Testimonials/testimonialData";
import leftArrow from '../images/left.jpg';
import rightArrow from '../images/right.jpg';


const Testimonial = () => {
    const [selected,setSelected]=useState(0);
    const tLength=testimonialData.length;

  return (
    <div className="testimonials">
            <div className="left-t">
                <span className="testHeader">Testimonials</span>
                <span className="stroke-text">What they say</span>
                <span>about us</span>
                <span>
                    {testimonialData[selected].review}
                </span>
                <span>
                    <span style={{color: "var(--primary-color)", fontWeight: "bold"}}>
                        {testimonialData[selected].name}
                    </span>
                    <span>{""}
                       - {testimonialData[selected].status}
                    </span>
                </span>
            </div>
            <div className="right-t">
                <div></div>
                <div></div>
                <img src={testimonialData[selected].image} alt=""/>
                <div className="arrows">
                    
                  <img onClick={()=>{
                    selected===0?setSelected(tLength -1):setSelected((prev)=> prev -1);
                  }} src={leftArrow} alt=""/>
                  <img 
                  onClick={()=>{
                    selected===tLength -1 ? setSelected(0) : setSelected((prev)=>prev +1);
                  }} src={rightArrow} alt=""/>  
                </div>
            </div>
        </div>
  )
}

export default Testimonial