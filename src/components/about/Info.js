import React from 'react';
import { BsAward } from "react-icons/bs";

 

const Info = () => {
  return (
   <div className="about__info grid">
    <div className="about__box">

        <h3 className="about__title">Calcola Impasto</h3>
        
    </div>

    <div className="about__box">
   
        <h3 className="about__title">Instagram2</h3>
        {/* <span className="about__subtitle">1 Anno</span> */}
    </div>
    
    <div className="about__box">
   
        <h3 className="about__title">Cambia Valute</h3>
        {/* <span className="about__subtitle">1 Anno</span> */}
    </div>

    <div className="about__box">
   
        <h3 className="about__title">Ecommerce</h3>
        {/* <span className="about__subtitle">1 Anno</span> */}
    </div>
   </div>
  )
}

export default Info