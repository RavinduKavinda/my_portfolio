import React from 'react'
import Close from '../assets/close.svg'

const ProjectsItem = ({img, title, details}) => {
  return (
    <div className="projects__item">
        <img src={img} alt="" className="projects__img" />

        <div className="projects__hover">
            <h3 className="projects__title">{title}</h3>
        </div>

        <div className="projects__modal">
            <div className="projects__modal-content">
                <img src={Close} alt="" className="modal__close" />

                <h3 className="modal__title">{title}</h3>
            </div>
        </div>
    </div>
  )
}

export default ProjectsItem