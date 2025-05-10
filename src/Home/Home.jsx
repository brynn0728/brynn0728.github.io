import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./Home.css";

import saean from "../assets/Home/saean.png";
import phone from "../assets/Home/phone.png";
import email from "../assets/Home/email.png";
import linkedin from "../assets/Home/linkedin.png";
import github from "../assets/Home/github.png";

const Home = () => {
    const location = useLocation();

    const scrollToSection = (id) => {
        if (location.pathname !== "/") {
            window.location.href = `/#${id}`;
            return;
        }

        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        } else {
            console.error(`Element with id "${id}" not found.`);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate");
                    }
                    // else {
                    //     entry.target.classList.remove("animate");
                    // }
                });
            },
            { threshold: 0.2 }
        );

        const elements = document.querySelectorAll(".animate-on-scroll");
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <section className="home">
                <div className="container">
                    <div className="home-content">
                        <div className="text-zone">
                            <h2 className="greeting animate-on-scroll">
                                Hello, I'm
                            </h2>
                            <h1 className="name animate-on-scroll">
                                Brynn Shin
                            </h1>
                            <h2 className="title animate-on-scroll">
                                A DS Junior at <span>UW-Madison</span>
                            </h2>
                            <h3 className="description animate-on-scroll">
                                Studying data science led me to discover a
                                passion for user experience design - where I now
                                focus on bridging the gap between people and
                                technology through thoughtful design.
                            </h3>
                            <div className="home-social animate-on-scroll">
                                {/* <a
                                    href="tel:(920) 297-0501"
                                    target="_blank"
                                    className="home-social-links"
                                >
                                    <img src={phone} alt="Phone" />
                                </a> */}
                                <a
                                    href="mailto:sinsaean@gmail.com"
                                    target="_blank"
                                    className="home-social-links"
                                >
                                    <img src={email} alt="Email" />
                                </a>
                                <a
                                    href="https://github.com/brynn0728"
                                    target="_blank"
                                    className="home-social-links"
                                >
                                    <img src={github} alt="GitHub" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/brynn-s-ba93802b3/"
                                    target="_blank"
                                    className="home-social-links"
                                >
                                    <img src={linkedin} alt="LinkedIn" />
                                </a>
                            </div>
                            <div className="buttons animate-on-scroll">
                                <button
                                    onClick={() => scrollToSection("contact")}
                                    className="btn"
                                >
                                    Contact Me
                                </button>
                            </div>
                        </div>
                        <div className="image-zone">
                            <img
                                src={saean}
                                alt="Saean Shin"
                                className="animate-on-scroll"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
