import React, { useEffect } from "react";
import "./Projects.css";
// import flowerappimg from "../../Assets/Images/flowerappimg.png"
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectItem from "./ProjectItem";

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="projects p-4 " id="projects">
      <div className="myProjectsText pt-5">
        <h3>
          My <span>Projects</span>
        </h3>{" "}
        <hr />
      </div>
      <div className="container text-center ">
        <div className="row">
          <ProjectItem
            image={
              process.env.PUBLIC_URL + "/assets/images/WebformikProject.png"
            }
            title="Webformik.com"
            description="Webformik: Code-Free Brilliance, Developer-Friendly Power. Design and customize your website effortlessly with our integrated Bootstrap system. No code editor needed, just drag, drop, and create!"
            link={"https://www.webformik.com/"}
            disabled={false}
            efect="flip-right"
          />
          <ProjectItem
            image={process.env.PUBLIC_URL + "/assets/images/Tableofimage.png"}
            title="Image Table Extract To CSV , Excel"
            description="Create one app for extract table from image to CSV or Excel file"
            disabled={true}
            efect="zoom-in"
          />
          <ProjectItem
            image={process.env.PUBLIC_URL + "/assets/images/PortfolioImage.png"}
            title={"Portfolio React App"}
            description="A simple portfolio React App"
            link={"https://qendresakodraliu.github.io/portfolio-react-app/"}
            disabled={false}
            efect="flip-left"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
