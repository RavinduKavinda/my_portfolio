import React from 'react'
import parse from 'html-react-parser'

const Certifacate = ({icon, year, title, link}) => {
  return (
    <div className="edu__item">
        <div className="edu__icon"> {icon} </div>

        <span className="edu__date"> {parse(year)} </span>
        <a href={link} target='__blank'>
        <h3 className="edu__title"> {parse(title)} </h3></a>
    </div>
  )
}

export default Certifacate