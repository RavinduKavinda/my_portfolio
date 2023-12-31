import React, { useState } from 'react'
import Close from '../assets/close.svg'

const ProjectsItem = ({img, title, details}) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  }
  return (
    <div className="projects__item">
        <img src={img} alt="" className="projects__img" />

        <div className="projects__hover" onClick={toggleModal}>
            <h3 className="projects__title">{title}</h3>
        </div>
        {/*----- Details -----*/}

        {modal && (

        <div className="projects__modal">
            <div className="projects__modal-content">
                <img src={Close} alt="" className="modal__close" onClick={toggleModal}/>

                <h3 className="modal__title">{title}</h3>

                <ul className="modal__list container">
                  {details.map(({icon, title, desc}, index) => {
                    return (
                      <li className="modal__item" key={index}>
                        <span className="item__icon">{icon}</span>

                        <div>
                          <span className="item__title">{title}</span>
                          <a href={desc} target="_blank"  className="item__desc ">{desc}</a>
                        </div>
                      </li>
                    );
                    })
                  }
                </ul>
                <img src={img} alt="" className='modal__img'/>
            </div>
        </div>
        )}
        
    </div>
  )
}

export default ProjectsItem