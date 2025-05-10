import React from "react";
import "./Projects.css";

import ChillToPlate from "../assets/Projects/Chill-to-Plate.png";
import Grow from "../assets/Projects/grow.png";
import fashion from "../assets/Projects/fashion.png";
import fratres from "../assets/Projects/fratres.png";
import gons from "../assets/Projects/gons.png";
import louis from "../assets/Projects/louis.png";
import sospiri from "../assets/Projects/sospiri.png";

const Projects = () => {
    const projects = [
        {
            title: "Grow: Course Review Platform",
            description:
                "Grow is a mobile-first platform designed to help university students share course reviews, explore grade distributions, and connect through automatically generated chatrooms.",
            image: Grow,
            technologies: ["React native", "Node.js", "Express.js", "Firebase"],
            githubLink:
                "https://github.com/wdragj/BuckyClass-mobile-ReactNative",
        },
        {
            title: "Chill to Plate",
            description:
                "An AI-driven web application built with OpenAI’s GPT models that suggests cooking ideas tailored to your fridge’s ingredients and guides you through every step in a conversational interface.",
            image: ChillToPlate,
            technologies: ["React.js", "Node.js", "Express.js", "OpenAI API"],
            githubLink: "https://github.com/Tyrrnien81/Chill-to-Plate",
            demoLink: "https://tyrrnien81.github.io/Chill-to-Plate/",
        },
        {
            title: "Fashion should be a form of escapism",
            description: "",
            image: fashion,
            technologies: [""],
            githubLink: "",
            // demoLink: "https://likelion-projectteam.github.io/UWM",
        },
        {
            title: "Fratres",
            description: "",
            image: fratres,
            technologies: [""],
            githubLink: "",
            // demoLink: "https://likelion-projectteam.github.io/UWM",
        },
        {
            title: "Erik Satie",
            description: "",
            image: gons,
            technologies: [""],
            githubLink: "",
        },
        {
            title: "Louis Vuitton",
            description: "",
            image: louis,
            technologies: [""],
            githubLink: "",
        },
        {
            title: "Sospiri",
            description: "",
            image: sospiri,
            technologies: [""],
            githubLink: "",
        },
    ];

    return (
        <section className="projects" id="projects">
            <h2 className="projects-title animate-on-scroll">
                Recent Projects
            </h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card animate-on-scroll" key={index}>
                        <div
                            className="project-image"
                            style={{
                                backgroundImage: `url(${project.image})`,
                                backgroundSize: "cover", // 추가: 이미지 크기 조정
                                backgroundPosition: "center", // 추가: 이미지 위치 조정
                            }}
                        >
                            <div className="project-overlay">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="technologies">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i}>{tech}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        GitHub <span>↗</span>
                                    </a>
                                    {project.demoLink && (
                                        <a
                                            href={project.demoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Demo <span>↗</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
