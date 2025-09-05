import img from './assets/o.jpg'
function Card() {

    return (
        <div className="card">
            <img className="img" src={img} alt="profile picture " />
            <h2 className="name">Gaurav Singh    </h2>
            <p >hey i am there what is this </p>
        </div>
    );

}
function Nav() {
    return (

        <nav className='mainbox'>

            <div className='nav'>
                <div >Gaurav Rawat </div>
                <ul className='nav-ul'>
                    <a href="#ABOUT">ABOUT</a>
                    <a href="#PROJECT">PROJECT</a>
                    <a href="#EDUCATION">EDUCATION</a>
                    <a href="#SKILLS">SKILLS</a>
                    <a href="#CONTACT">CONTACT</a>
                </ul>
            </div>

        </nav>
    );
}
function Main() {
    return (
        <header className='header' id='ABOUT'>
            <div className='div'>
                <img className='img' src={img} alt="image" />
            </div>
            <div className='text'>
                <h1 className='gaurav'>Hi, I’m Gaurav Singh</h1>
                <p>
                    As a recent Computer Science graduate specializing in full-stack development, I bring hands-on experience in building scalable applications with a focus on the Python and Django ecosystem. I am proficient in designing and developing robust RESTful APIs, ensuring clean, production-ready code. My skills extend to modern frontend frameworks like Next.js and DevOps practices such as containerization with Docker. I am passionate about applying my knowledge to create high-quality, efficient solutions in a professional software engineering environment.

                </p>
            </div>

        </header>
    );

}
function Project() {
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
    );
}

function Education() {
    return (
        <div className="education" id="EDUCATION">
            <h2 className="section-title">Education</h2>
            <div className="education-content">
                <div className="education-item">
                    <h3>Bachelor of Technology in Computer Science</h3>
                    <p className="institution">Graphic Era Hill University Dehradun</p>
                    <p className="duration">2023 - 2027</p>

                </div>
                <div className="education-item">
                    <h3>Intermidiate</h3>
                    <p className="institution">Goverment Inter collage Sarainkhet Almora</p>
                    <p className="duration">2021 - 2023</p>

                </div>
            </div>
        </div>
    );
}

function Skills() {
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
    );
}

function Contact() {
    return (
        <div className="contact" id="CONTACT">
            <h2 className="section-title">Contact</h2>
            <div className="contact-content">
                <div className="contact-info">
                    <div className="contact-item">
                        <h3>Email</h3>
                        <p>golurawat151106@gmail.com</p>
                    </div>
                    <div className="contact-item">
                        <h3>LinkedIn</h3>
                        <p>linkedin.com/in/gaurav-singh</p>
                    </div>
                    <div className="contact-item">
                        <h3>GitHub</h3>
                        <p>github.com/gaurav-singh</p>
                    </div>
                    <div className="contact-item">
                        <h3>Phone</h3>
                        <p>+91  7579096969</p>
                    </div>
                </div>
                <div className="contact-form">
                    <h3>Get In Touch</h3>
                    <form>
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <textarea placeholder="Your Message" rows="5" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
function Footer(){
    return(
        <div className='footer'>
            <div >
                | Copyright © 2025 Gaurav Singh |

            </div>

        </div>
    );
}




export default Card;
export { Nav, Main, Project, Education, Skills, Contact ,Footer };


