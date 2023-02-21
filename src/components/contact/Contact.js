import React from 'react'
import { BsInfoCircle, BsArrowRightCircle, BsEnvelope, BsWhatsapp, BsMessenger } from 'react-icons/bs'

import './contact.css';

const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Get in touch</h2>
            <span className="section__subtitle">Contact Me</span>
{/*            
            <div className="contact__container ">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>
                    <div className="contact__info">
                        <div className="contact__card">
                            <BsEnvelope className='contact__card-icon' />
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">fede31d@gmail.com</span>

                            <a href="mailto:fede31d@gmail.com" className="contact__button">scrivimi
                                <BsArrowRightCircle className='contact__button-icon' />
                            </a>
                        </div>

                        <div className="contact__card">
                            <BsWhatsapp className='contact__card-icon' />
                            <h3 className="contact__card-title">Whatsapp</h3>
                            <span className="contact__card-data">351-9565903</span>

                            <a href="https://api.whatsapp.com/send?
                            phone=3519565903&text=Hello," className="contact__button">scrivimi
                                <BsArrowRightCircle className='contact__button-icon' />
                            </a>
                        </div>

                        <div className="contact__card">
                            <BsMessenger className='contact__card-icon' />
                            <h3 className="contact__card-title">Messenger</h3>
                            <span className="contact__card-data">user.fb</span>

                            <a href="" className="contact__button">scrivimi
                                <BsArrowRightCircle className='contact__button-icon' />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title"></h3>
                </div>
            </div> */}
            <div className="contact__container">
            
            <div className="contact__card">
                            <BsEnvelope className='contact__card-icon' />
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">fede31d@gmail.com</span>

                            <a href="mailto:fede31d@gmail.com" className="contact__button" target={'_blank'}>scrivimi
                                <BsArrowRightCircle className='contact__button-icon' />
                            </a>
                        </div>

                        <div className="contact__card">
                            <BsWhatsapp className='contact__card-icon' />
                            <h3 className="contact__card-title">Whatsapp</h3>
                            <span className="contact__card-data">351-9565903</span>

                            <a href="https://api.whatsapp.com/send?
                            phone=3519565903&text=Hello," className="contact__button" target={'_blank'}>scrivimi
                                <BsArrowRightCircle className='contact__button-icon' />
                            </a>
                        </div>

                        <div className="contact__card">
                            <BsMessenger className='contact__card-icon' />
                            <h3 className="contact__card-title">Messenger</h3>
                            <span className="contact__card-data">user.fb</span>

                            <a href="https://www.messenger.com/t/1115370791/" className="contact__button" target={'_blank'}>scrivimi
                                <BsArrowRightCircle className='contact__button-icon' />
                            </a>
                        </div>
            </div>

        </section>
    )
}

export default Contact