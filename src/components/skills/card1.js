import React from 'react';
import { BiBadgeCheck } from 'react-icons/bi';

function Card1() {
    return (
        <div className="skills__content">         
            <div className="skills__box">
                <div className="skills__group">
          
                    
                    <div className="skills__data">
                        <BiBadgeCheck />
                        <div >
                            <h3 className="skills__name">JavaScript</h3>
                            <span className="skills__level">60%</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <BiBadgeCheck />
                        <div >
                            <h3 className="skills__name">PHP</h3>
                            <span className="skills__level">60%</span>
                        </div>
                    </div>

             

                    <div className="skills__data">
                        <BiBadgeCheck />
                        <div >
                            <h3 className="skills__name">Redux</h3>
                            <span className="skills__level">70%</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <BiBadgeCheck />
                        <div >
                            <h3 className="skills__name">Firebase</h3>
                            <span className="skills__level">80%</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <BiBadgeCheck />
                        <div >
                            <h3 className="skills__name">C++</h3>
                            <span className="skills__level">40%</span>
                        </div>
                    </div>



                </div>

            </div>
        </div>
    )
}

export default Card1