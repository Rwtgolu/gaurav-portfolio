import React from 'react'
import img from '../assets/IMG.png'
import SplitText from "../Effect/SplitText";
const Main = () => {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
  return (
    <header className='header' id='ABOUT'>
      <div className='div'>
        <img className='img' src={img} alt="image" />
      </div>
      <div className='text'>
        <SplitText
          text="Hi, I’m Gaurav Singh"
          className='gaurav'
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />

        <p>
          As a recent Computer Science graduate specializing in full-stack development, I bring hands-on experience in building scalable applications with a focus on the Python and Django ecosystem. I am proficient in designing and developing robust RESTful APIs, ensuring clean, production-ready code. My skills extend to modern frontend frameworks like Next.js and DevOps practices such as containerization with Docker. I am passionate about applying my knowledge to create high-quality, efficient solutions in a professional software engineering environment.
        </p>
      </div>

    </header>
  )
}
export default Main;
