import React from 'react'

const Skills = () => {
  return (
    <div className="skills" id="SKILLS">
            <h2 className="section-title">Skills</h2>
            <div className="skills-content">
                <div className="skills-category">
                    <h3>Programming Languages</h3>
                    <div className="skills-list">
                        <span className="skill-tag">Python</span>
                        <span className="skill-tag">JavaScript</span>
                        <span className="skill-tag">HTML/CSS</span>
                        <span className="skill-tag">SQL</span>
                        <span className="skill-tag">C++</span>
                    </div>
                </div>
                <div className="skills-category">
                    <h3>Coursework</h3>
                    <div className="skills-list">
                        <span className="skill-tag">DSA</span>
                        <span className="skill-tag">OOPS</span>
                        
                    </div>
                </div>
                <div className="skills-category">
                    <h3>Tools & Technologies</h3>
                    <div className="skills-list">
                        <span className="skill-tag">Git</span>
                        <span className="skill-tag">GitHub</span>
                         <span className="skill-tag">VS COde</span>
                        <span className="skill-tag">OpenCV</span>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Skills
