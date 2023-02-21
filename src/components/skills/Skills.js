import React from 'react'
import Card1 from './card1';
import Card2 from './card2';
import "./skills.css";

function Skills() {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>
            <div className="skills__container container ">
                <Card1 />
                <Card2/>
            </div>
        </section>)
}

export default Skills