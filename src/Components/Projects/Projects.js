import React, { useEffect } from 'react'
import './Projects.css'
import SocialMedia from '../../Assets/Images/Social-Media-min.png'
import PortfolioImage from '../../Assets/Images/Portfolio-image.png'
import Todo from "../../Assets/Images/todo.png"
import AOS from 'aos'
import 'aos/dist/aos.css'

function Projects() {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, []);
    return (
        <div className='projects p-5' id='projects'>
            <div className='myProjectsText'>
                <h3>MY <span>Projects</span></h3> <br /> <hr />
            </div>
            <div className='container text-center mt-4'>
                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-4 p-4' data-aos="flip-right">
                        <div className="card text-dark">
                            <img src={SocialMedia} className="card-img-top" alt="Social Media" />
                            <div className="card-body">
                                <h5 className="card-title">Flower listing app</h5>
                                <p className="card-text">A react app with flower listing from API endpoint, search functionality and authentication</p>
                                <a className="btn disabled">More Detail</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4 p-4' data-aos="zoom-in">
                        <div className="card text-dark">
                            <img src={Todo} className="card-img-top" alt="Job Portal" />
                            <div className="card-body">
                                <h5 className="card-title">Simple Todo App</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a className="btn disabled">More Detail</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4 p-4' data-aos="flip-left">
                        <div className="card text-dark">
                            <img src={PortfolioImage} className="card-img-top" alt="Online vote" />
                            <div className="card-body">
                                <h5 className="card-title">Portfolio React App</h5>
                                <p className="card-text">A simple portfolio React App</p>
                                <a href="https://github.com/qendresakodraliu/portfolio-react-app" className="btn">More Detail</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;