import React, { useEffect } from 'react'
import './Projects.css'
import PortfolioImage from '../../Assets/Images/PortfolioImage.png'
import Todo from "../../Assets/Images/todo.png"
import flowerappimg from "../../Assets/Images/flowerappimg.png"
import AOS from 'aos'
import 'aos/dist/aos.css'
import ProjectItem from './ProjectItem'

function Projects() {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, []);
    return (
        <div className='projects p-4 ' id='projects'>
            <div className='myProjectsText pt-5'>
                <h3>My <span>Projects</span></h3>  <hr />
            </div>
            <div className='container text-center '>
                <div className='row'>

                    <ProjectItem
                        image={flowerappimg}
                        title="Flower listing app"
                        description="A react app with flower listing from API endpoint, search functionality and authentication"
                        disabled={true}
                        efect='flip-right'
                    />
                    <ProjectItem
                        image={Todo}
                        title="Simple Todo App"
                        description='Created a simple todo app that you can list some todos from API, add todo, delete todo.'
                        disabled={true}
                        efect='zoom-in'
                    />
                    <ProjectItem
                        image={PortfolioImage}
                        title={'Portfolio React App'}
                        description='A simple portfolio React App'
                        disabled={false}
                        efect='flip-left'
                    />

                </div>
            </div>
        </div>
    )
}

export default Projects;