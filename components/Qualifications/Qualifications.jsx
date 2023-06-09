import React, { useState } from 'react'
import "./Qualifications.css"

const Qualifications = () => {

    const[toggle,setToggle] = useState(1);
    const toggleTab = (index) =>{
        setToggle(index)
    }

  return (
    <section className="qualification section" id="qualification">
        <h3 className="section__title">
            Qualification
        </h3>

        <span className="section__subtitle">My Personal Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">

                <div onClick={() =>setToggle(1)} className={toggle === 1 ?"qualification__button qualification__active button--flex":"qualification__button button--flex"}>
                    <i class='bx bx-briefcase-alt-2'></i>
                    Experience
                </div>

                <div onClick={() =>setToggle(2)} className={toggle === 2 ?"qualification__button qualification__active button--flex":"qualification__button button--flex"}>
                   <i class='bx bx-briefcase-alt-2'></i>
                    Education
                </div>

            </div>

            <div className="qualification__sections">
                
                <div className={toggle === 1 ?"qualification__content qualification__content-active":"qualification__content"}>
                    
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">
                                AsoKumar ES PVT LTD
                            </h3>
                            <span className="qualification__subtitle">
                                Ui Designer
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> April 2023 - present
                            </div>

                        </div>
                        <div>
                            <span className="qualification__rounder">

                            </span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    
                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder">

                            </span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">
                                Freelancer
                            </h3>
                            <span className="qualification__subtitle">
                            Ui/Ux Designer
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> April 2023 - Jan 2021
                            </div>

                        </div>
                    </div>
                    
                                        
                </div>
                
                <div className={toggle === 2 ?"qualification__content qualification__content-active":"qualification__content"}>
                    
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">
                                Sri Krishna College of Engineering and Technology
                            </h3>
                            <span className="qualification__subtitle">
                                B.E (7.8 CGPA) <small>currently</small>
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2021 - 2025
                            </div>

                        </div>
                        <div>
                            <span className="qualification__rounder">

                            </span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    
                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder">

                            </span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">
                               Saraswathi Matric Hr. Sec School
                            </h3>
                            <span className="qualification__subtitle">
                                12<sup>th</sup> (86%)
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2009 - 2021
                            </div>

                        </div>
                    </div>
                    
                </div>

            </div>

        </div>

    </section>
  )
}

export default Qualifications