import React from 'react'
import './HomeBanner.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Typewriter from 'typewriter-effect'




function HomeBanner() {
    return (
        <div className="w-100 home" id='home' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/images/background.jpg'})` }}>
            <div className='container' >
                <div className='row pt-5 d-flex justify-content-center mt-5' >
                    <div className='col-12 col-md-6 col-lg-6 text-light homeTextPart' >
                        <div>
                            <h3 className="welcome">
                                WELCOME !
                            </h3> <br />
                            <h1 id="animation-text"><Typewriter
                                options={{
                                    autoStart: true,
                                    loop: true,
                                    delay: 60,
                                    strings: ["HI I AM QENDRESA", "I AM WEB DEVELOPER"]
                                }}
                            />
                            </h1><br />
                            <p>I am passionate and extremely motivated new front-end developer. Working with latest technologies like React JS
                            </p>
                            <div className='icons'>

                                <a href="https://www.facebook.com/qendresa.kodraliu/"><FontAwesomeIcon className='icon' icon={faFacebook} /></a>
                                <a href="https://github.com/qendresakodraliu/"><FontAwesomeIcon className='icon' icon={faGithub} /></a>
                                <a href="https://www.linkedin.com/in/qendresa-kodraliu-19791b256/"><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default HomeBanner;