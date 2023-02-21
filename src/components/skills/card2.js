import React from 'react'


import { BiBadgeCheck } from 'react-icons/bi';


const Card2 = () => {
    return (
        <div className="skills__content">

            <div className="skills__box">
                <div className="skills__group">
                <div className="skills__data">
                        <BiBadgeCheck />
                        <div >
                            <h3 className="skills__name">HTML</h3>
                            <span className="skills__level">90%</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <BiBadgeCheck />
                        <div >
                            <h3 className="skills__name">CSS</h3>
                            <span className="skills__level">90%</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <BiBadgeCheck />
                        <div >
                            <h3 className="skills__name">BootStrap</h3>
                            <span className="skills__level">70%</span>
                        </div>
                    </div>

       <div className="skills__data">
                        <BiBadgeCheck />
                        <div >
                            <h3 className="skills__name">Wordpress</h3>
                            <span className="skills__level">60%</span>
                        </div>
                    </div>
                   
                   
                    <div className="skills__data">
                        <BiBadgeCheck />
                        <div >
                            <h3 className="skills__name">React</h3>
                            <span className="skills__level">80%</span>
                        </div>
                    </div>
                   
                    <div className="skills__data">
                        <BiBadgeCheck />
                        <div >
                            <h3 className="skills__name">React Native</h3>
                            <span className="skills__level">80%</span>
                        </div>
                    </div>

                   
                </div>

            </div>
        </div>
    )
}

export default Card2