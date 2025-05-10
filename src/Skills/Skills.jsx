import React, { useEffect } from "react";
import "./Skills.css";

const Skills = () => {
    const skillsList = [
        {
            category: "Languages",
            skills: ["Python", "Java", "JavaScript", "C", "Bash"],
        },
        {
            category: "Frontend",
            skills: ["React.js", "React Native", "HTML5", "CSS3", "JavaScript"],
        },
        {
            category: "Backend",
            skills: ["Flask", "Node.js", "Express.js", "MySQL"],
        },
        {
            category: "Platforms",
            skills: ["Windows", "Linux", "macOS"],
        },
        {
            category: "Tools & Others",
            skills: [
                "Git",
                "Jira",
                "Slack",
                "Adobe Photoshop",
                "Adobe Illustrator",
                "Adobe Premiere Pro",
                "Adobe After Effects",
                "Firebase",
                "Figma",
            ],
        },
    ];

    // 스킬 배열을 5개씩 나누는 함수
    const chunkSkills = (skills, chunkSize = 5) => {
        const chunks = [];
        for (let i = 0; i < skills.length; i += chunkSize) {
            chunks.push(skills.slice(i, i + chunkSize));
        }
        return chunks;
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate");
                    }
                });
            },
            { threshold: 0.1 }
        );

        document
            .querySelectorAll(".animate-on-scroll")
            .forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="skills" id="skills">
            <h2 className="skills-title animate-on-scroll">Technical Skills</h2>
            <div className="skills-container">
                {skillsList.map((item, index) => (
                    <div
                        className="skill-category animate-on-scroll"
                        key={index}
                    >
                        <h3>{item.category}</h3>
                        <div className="skill-columns">
                            {chunkSkills(item.skills).map(
                                (chunk, chunkIndex) => (
                                    <ul key={chunkIndex}>
                                        {chunk.map((skill, i) => (
                                            <li key={i}>{skill}</li>
                                        ))}
                                    </ul>
                                )
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
