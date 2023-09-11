import React, { useState } from 'react'
import { themes } from '../data'
import Themeitem from './Themeitem'
import { FaCogs } from 'react-icons/fa'
import { FiSun, FiMoon } from 'react-icons/fi'
import './Themes.css'

const Themes = () => {
    const [showSwitcher, setshowSwitcher] = useState(false);

  return (
    <div>
        <div className={`${showSwitcher ? 'show-switcher' : ''} style__switcher`}>
            <div className="switch__toggler"
                 onClick={() => setshowSwitcher(!showSwitcher)} >
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

            <div className="switcher__close"
                 onClick={() => setshowSwitcher(!showSwitcher)}>
                &times;
            </div>
        </div>
    </div>
  )
}

export default Themes