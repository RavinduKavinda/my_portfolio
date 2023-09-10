import React from 'react'
import { projects } from '../../data'
import ProjectsItem from '../../components/ProjectsItem'
import './project.css'

const Project = () => {
  return (
    <section className="prjects section">
      <h2 className="section__title">
        My <span>Project</span>
      </h2>

      <div className="projects__container container rcontainer">
        {projects.map((item) => {
          return <ProjectsItem key={item.id}{...item}/>
        })}
      </div>
    </section>
  )
}

export default Project