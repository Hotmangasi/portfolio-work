import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Eduworld',
    github: 'https://github.com/Kelompok14-LMS',
    demo : 'https://educate-the-world.netlify.app/'
  },
  {
    id: 1,
    image: IMG2,
    title: 'Project 2',
    github: 'https://github.com',
    demo : 'https://dribble.com/shots/16673715-Cripto-currency-dashboard-and-financial-data-visualization'
  },
  {
    id: 1,
    image: IMG3,
    title: 'Project 3',
    github: 'https://github.com',
    demo : 'https://dribble.com/shots/16673715-Cripto-currency-dashboard-and-financial-data-visualization'
  },
  {
    id: 1,
    image: IMG4,
    title: 'Project 4',
    github: 'https://github.com',
    demo : 'https://dribble.com/shots/16673715-Cripto-currency-dashboard-and-financial-data-visualization'
  },
  {
    id: 1,
    image: IMG5,
    title: 'Project 5',
    github: 'https://github.com',
    demo : 'https://dribble.com/shots/16673715-Cripto-currency-dashboard-and-financial-data-visualization'
  },
  {
    id: 1,
    image: IMG6,
    title: 'Project 6',
    github: 'https://github.com',
    demo : 'https://dribble.com/shots/16673715-Cripto-currency-dashboard-and-financial-data-visualization'
  },
]

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
              <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
              <a href={github} className='btn' target='_blank'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio