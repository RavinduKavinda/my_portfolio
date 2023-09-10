import React from 'react'
import Close from '../assets/close.svg'

const ProjectsItem = ({img, title, details}) => {
  return (
    <div className="projects__item">
        <img src={img} alt="" className="projects__img" />

        <div className="projects__hover">
            <h3 className="projects__title">{title}</h3>
        </div>
        {/*----- Details -----*/}
        <div className="projects__modal">
            <div className="projects__modal-content">
                <img src={Close} alt="" className="modal__close" />

                <h3 className="modal__title">{title}</h3>

                <ul className="modal__list container">
                  {details.map(({icon, title, desc}, index) => {
                    return (
                      <li className="modal__item" key={index}>
                        <span className="item__icon">{icon}</span>

                        <div>
                          <span className="item__title">{title}</span>
                          <span className="item__desc">{desc}</span>
                        </div>
                      </li>
                    )
                    })
                  }
                </ul>
                <img src={img} alt="" className='modal__img'/>
            </div>
        </div>
    </div>
  )
}

export default ProjectsItem