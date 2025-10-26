import React from 'react'

const Project = () => {
  return (
    <div className='projects' id='PROJECT'>
            <h2 className='section-title'>Projects</h2>
            <div className='projects-grid'>
                <div className='project-card'>
                    <div className='project-header'>
                        <h3 className='project-title'>Facial Recognition & Emotion Detection</h3>
                       
                    </div>
                    <p className='project-description'>
                        Created a system that can recognize faces in real-time using DeepFace with the VGG-Face model and OpenCV. <br />
                        <br />
                        Improved image processing (face alignment, resizing, cleaning) to make results faster and more accurate. <br /><br />
                        Achieved up to 95% accuracy in face recognition and 92% accuracy in emotion detection during testing. <br />
                        <br />
                        Made the project flexible so it can be used for security, attendance systems, and customer behavior analysis.
                    </p>
                    <div className='project-tech'>
                        <span className='tech-tag'>Python</span>
                        <span className='tech-tag'>OpenCV</span>
                        <span className='tech-tag'>DeepFace</span>
                        <span className='tech-tag'>Machine Learning</span>
                    </div>
                </div>

                <div className='project-card'>
                    <div className='project-header'>
                        <h3 className='project-title'>Netflix Clone</h3>
                        
                    </div>
                    <p className='project-description'>
                        Made a website that looks like Netflix using HTML, CSS, and JavaScript. <br /> <br />
                        Designed pages that work well on computer, tablet, and mobile screens. <br /> <br />
                        Added movie lists, scrolling sections, and hover effects for a better look. <br /> <br />
                        Improved page speed and layout for smooth use.
                    </p>
                    <div className='project-tech'>
                        <span className='tech-tag'>HTML</span>
                        <span className='tech-tag'>CSS</span>
                        <span className='tech-tag'>JavaScript</span>
                        <span className='tech-tag'>Responsive Design</span>
                    </div>
                </div>

                <div className='project-card'>
                    <div className='project-header'>
                        <h3 className='project-title'>Credit Card Fraud Detection</h3>
                       
                    </div>
                    <p className='project-description'>
                        Detection system studies and analyses user behaviour patterns and uses location scanning techniques to identify any unusual patterns. <br />
                        <br />

                        In the instance of any unusual activity, the system will not only raise alerts, but it will also block the user after three invalid attempts. <br /> <br />
                        Achieved up to 70% accuracy in fraud detection.
                    </p>
                    <div className='project-tech'>
                        <span className='tech-tag'>Python</span>
                        <span className='tech-tag'>Machine Learning</span>
                        <span className='tech-tag'>Data Analysis</span>
                        <span className='tech-tag'>Security</span>
                        <span className='tech-tag'>Html</span>
                        <span className='tech-tag'>Css</span>
                        <span className='tech-tag'>JavaScript</span>

                    </div>
                </div>
            </div>
        </div>
  )
}

export default Project
