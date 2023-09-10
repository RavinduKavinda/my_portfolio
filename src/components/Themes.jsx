import React from 'react'
import { themes } from '../data'
import Themeitem from './Themeitem'
import { FaCogs } from 'react-icons/fa'
import { FiSun, FiMoon } from 'react-icons/fi'
import './Themes.css'

const Themes = () => {
  return (
    <div>
        <div className="style__switcher">
            <div className="switch__toggler">
                <FaCogs />
            </div>

            <div className="theme__toggler">
                <FiMoon />
            </div>

            <h3 className="switcher__title">
                Style Switcher
            </h3>
            <div className="switcher__items">
                {themes.map((theme, index) => {
                    return (
                    <Themeitem key={index} {...theme} />
                    )
                })}
            </div>

            <div className="switcher__close">
                &times;
            </div>
        </div>
    </div>
  )
}

export default Themes