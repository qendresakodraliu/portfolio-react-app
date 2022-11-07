import React, { useEffect } from 'react'
import './Skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faCode} from '@fortawesome/free-solid-svg-icons'
import { faReact, faBootstrap, faHtml5, faCode, faCss3, faGithub, faJs } from '@fortawesome/free-brands-svg-icons'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Skills() {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, []);
    return (
        <div className='skills p-5' id='skills'>
            <div className='myskillItemText pt-5'>
                <h3>MY <span>Skills</span></h3> <br />
                <hr />
            </div>
            <div className='container text-center mt-5'>
                <div className='row gx-2'>
                    <div className='col-12 col-md-6 col-lg-4  p-3' data-aos="fade-right">
                        <div className='border px-4 py-5 skillItem'>
                            <p className='skillItemIcon'><span className='border p-2'><FontAwesomeIcon icon={faReact} /></span></p>
                            <h5 className='mt-4'>REACT JS</h5>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="fade-up">
                        <div className='border px-4 py-5 skillItem'>
                            <p className='skillItemIcon'><span className='border p-2'><FontAwesomeIcon icon={faBootstrap} /></span></p>
                            <h5 className='mt-4'>BOOTSTRAP </h5>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="fade-left">
                        <div className='border px-4 py-5 skillItem'>
                            <p className='skillItemIcon'><span className='border p-2'><FontAwesomeIcon icon={faJs} /></span></p>
                            <h5 className='mt-4'>JAVASCRIPT</h5>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="fade-left">
                        <div className='border px-4 py-5 skillItem'>
                            <p className='skillItemIcon'><span className='border p-2'><FontAwesomeIcon icon={faHtml5} /></span></p>
                            <h5 className='mt-4'>HTML</h5>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="fade-left">
                        <div className='border px-4 py-5 skillItem'>
                            <p className='skillItemIcon'><span className='border p-2'><FontAwesomeIcon icon={faCss3} /></span></p>
                            <h5 className='mt-4'>CSS</h5>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="fade-left">
                        <div className='border px-4 py-5 skillItem'>
                            <p className='skillItemIcon'><span className='border p-2'><FontAwesomeIcon icon={faGithub} /></span></p>
                            <h5 className='mt-4'>Git/GitHUB</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;