import React from 'react';
import "./about.css";
import Info from './Info';
import profile from '../../assets/profile.jpg'
import { BsDownload } from "react-icons/bs";



const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">Alcuni Progetti</h2>

            <div className="about__container container ">               

                <div className="about__data">
                
                    <Info />
                    
                  
                  
                </div>
             
            </div>  


            
        </section>
    )
}

export default About