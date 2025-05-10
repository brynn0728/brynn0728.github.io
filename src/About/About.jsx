import React, { useState, useEffect } from "react";
import "./About.css";
import imoticon from "../assets/About/imoticon.png";

const About = () => {
    const [activeTab, setActiveTab] = useState("experience");

    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         (entries) => {
    //             entries.forEach((entry) => {
    //                 if (entry.isIntersecting) {
    //                     entry.target.classList.add("animate");
    //                 }
    //             });
    //         },
    //         { threshold: 0.1 }
    //     );

    //     const elements = document.querySelectorAll(".animate-on-scroll");
    //     elements.forEach((el) => observer.observe(el));

    //     return () => observer.disconnect();
    // }, []);

    return (
        <section className="about" id="about">
            <div className="container">
                <h2 className="about-title animate-on-scroll">About Me</h2>
                <div className="about-content">
                    <div className="about-image animate-on-scroll">
                        <img src={imoticon} alt="Profile" />
                    </div>
                    <div className="tabs-container animate-on-scroll">
                        <div className="tabs">
                            <button
                                className={`tab-btn ${
                                    activeTab === "experience" ? "active" : ""
                                }`}
                                onClick={() => setActiveTab("experience")}
                            >
                                Experience
                            </button>
                            <button
                                className={`tab-btn ${
                                    activeTab === "education" ? "active" : ""
                                }`}
                                onClick={() => setActiveTab("education")}
                            >
                                Education
                            </button>
                        </div>

                        <div
                            className={`tab-content ${
                                activeTab === "education"
                                    ? "education"
                                    : "experience"
                            }`}
                        >
                            <div
                                className={`tab-pane ${
                                    activeTab === "experience" ? "active" : ""
                                }`}
                            >
                                <div className="timeline-item">
                                    <h4>Public Relations Officer</h4>
                                    <span className="date">
                                        February 2025 - Current
                                    </span>
                                    <p>
                                        Korean Undergraduate Student Association
                                        <br />
                                        at UW-Madison
                                    </p>
                                    <ul>
                                        <li>
                                            Manage and curate content for KUSA’s
                                            official Instagram account.
                                        </li>
                                        <li>
                                            Design promotional materials,
                                            including posters and event flyers,
                                            using Adobe Photoshop & Illustrator.
                                        </li>
                                        <li>
                                            Edit videos and create promotional
                                            content for events using Premiere
                                            Pro & After Effects.
                                        </li>
                                    </ul>
                                </div>
                                <div className="timeline-item">
                                    <h4>UI/UX Designer</h4>
                                    <span className="date">
                                        February 2025 - Current
                                    </span>
                                    <p>LIKELION WISCONSIN</p>
                                    <ul>
                                        <li>
                                            Lead UI/UX design within the
                                            Computer Science team, creating
                                            user-friendly interfaces for web
                                            applications.
                                        </li>
                                        <li>
                                            Design wireframes and interactive
                                            prototypes using Figma to enhance
                                            user experience and accessibility.
                                        </li>
                                        <li>
                                            Develop UI assets and visual
                                            elements using Adobe Illustrator and
                                            Photoshop for high-quality designs.
                                        </li>
                                        <li>
                                            Collaborate with front-end
                                            developers to implement responsive
                                            and interactive web designs using
                                            HTML, CSS, and JavaScript.
                                        </li>
                                    </ul>
                                </div>
                                <div className="timeline-item">
                                    <h4>Front-End Web Developer</h4>
                                    <span className="date">
                                        January 2024 - May 2024
                                    </span>
                                    <p>Computer Science Union at UW-Madison</p>
                                    <ul>
                                        <li>
                                            Designed and implemented the website
                                            layout using HTML, CSS, and
                                            JavaScript.
                                        </li>
                                        <li>
                                            Developed the functionality using
                                            Java and Firebase.
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div
                                className={`tab-pane ${
                                    activeTab === "education" ? "active" : ""
                                }`}
                            >
                                <div className="timeline-item">
                                    <h4>University of Wisconsin-Madison</h4>
                                    <span className="date">
                                        Expected May 2026
                                    </span>
                                    <p>B.S. in Data Science</p>
                                    <ul>
                                        {/* <li>Dean's List: 2021-2023</li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
