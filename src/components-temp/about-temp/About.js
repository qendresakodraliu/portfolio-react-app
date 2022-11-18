import React, { useEffect } from 'react'
import './About.css'
import AOS from 'aos'




function About() {
    useEffect(() => {
        AOS.init({ duration: 2500 })
    }, [])
    return (
        <div className="w-100 about" id='about'>
            <div className='container pt-5' >
                <div className='row pt-5 d-flex justify-content-center'>
                    <div className='col-12 col-m d-6 col-lg-6 text-light aboutTextPart' data-aos="fade-left">
                        <div>
                            <h3 className="welcome">
                                Hello, I Am Qendresa Kodraliu
                            </h3> <br />
                            <p>
                                I am passionate and extremely motivated new front-end developer.
                                I believe I stand out due to my passion for continuous innovation and pushing boundaries to
                                bring forward new ideas. With my skills, I identify real-world challenges and develop applications
                                that bring efficiency and improvement to the lives of users and also showcase which technical
                                improvements can make a meaningful impact on the user and the business.
                            </p>

                            <a className='btn mt-3' href={"/assets/documents/Qendresa-Kodraliu-CV.pdf"} download>Download CV</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default About;