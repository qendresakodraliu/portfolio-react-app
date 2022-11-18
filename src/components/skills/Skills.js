import React, { useEffect } from 'react'
import './Skills.css'
import { faReact, faBootstrap, faHtml5, faCss3, faGithub, faJs } from '@fortawesome/free-brands-svg-icons'
import AOS from 'aos'
import 'aos/dist/aos.css'
import SkillItem from './SkillItem'

function Skills() {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, []);
    return (
        <div className='skills p-5' id='skills'>
            <div className='my-skill-item-text pt-5'>
                <h3>MY <span>Skills</span></h3> <br />
                <hr />
            </div>
            <div className='container text-center mt-5'>
                <div className='row gx-2'>
                    {/* <div className='col-12 col-md-6 col-lg-4  p-2' data-aos="fade-right">
                        <div className='border px-4 py-5 skillItem'>
                            <p className='skillItemIcon'><span className='border p-2'><FontAwesomeIcon icon={faReact} /></span></p>
                            <h5 className='mt-4'>REACT JS</h5>
                        </div>
                    </div> */}
                    <SkillItem
                        effect="fade-right"
                        icon={faReact}
                        name='REACT JS'
                    />
                    <SkillItem
                        effect="fade-up"
                        icon={faBootstrap}
                        name='BOOTSTRAP'
                    />
                    <SkillItem effect="fade-left"
                        icon={faJs}
                        name="JAVASCRIPT"
                    />
                    <SkillItem
                        effect="fade-right"
                        icon={faHtml5}
                        name="HTML"
                    />
                    <SkillItem
                        effect="fade-up"
                        icon={faCss3}
                        name='CSS'
                    />
                    <SkillItem
                        effect="fade-left"
                        icon={faGithub}
                        name='Git/GitHUB' />
                </div>
            </div>
        </div>
    )
}

export default Skills;