import React from 'react'
import './about.css'
import ME1 from '../../assets/Foto.jpg'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {PiFolders} from 'react-icons/pi'

function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
              <div className="about__me-image">
                    <img src={ME1} alt="About Image" />
              </div>
        </div>
        <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>1+ Years Working</small>
              </article>

              <article className='about__card'>
                <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>10+ Indonesia</small>
              </article>

              <article className='about__card'>
                <PiFolders className='about__icon'/>
                <h5>Projects</h5>
                <small>80+ Completed</small>
              </article>
            </div>

            <p>The development of technological progress is inseparable from life. So it takes adjustments to be able to keep up with it. It takes a reliable programmer who has a problem-solving spirit and also a consistent attitude. I am someone who has a problem-solving attitude and is consistent in anything. I also always liken it to an empty glass that can always be filled with various things that can help my development. And also I have a vision to be able to help the community with technology and make myself useful for society and society.</p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About