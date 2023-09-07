import React from 'react'
import parse from 'html-react-parser'

const EducationItem = ({icon, year, title}) => {
  return (
    <div className="edu__item">
        <div className="edu__icon"> {icon} </div>

        <span className="edu__date"> {parse(year)} </span>
        <h3 className="edu__title"> {parse(title)} </h3>
    </div>
  )
}

export default EducationItem