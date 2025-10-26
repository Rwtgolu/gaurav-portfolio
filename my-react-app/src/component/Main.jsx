import React from 'react'
import img from  '/Users/gauravsingh/Desktop/portfolio/my-react-app/src/component/o.jpg';

const Main = () => {
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
  )
}
export default Main;
