import React, { useEffect, useState } from 'react'
import { themes } from '../data'
import Themeitem from './Themeitem'
import { FaCogs } from 'react-icons/fa'
import { FiSun, FiMoon } from 'react-icons/fi'
import './Themes.css'

const getStorageColor = () => {
    let color = '#0984e3';
    if (localStorage.getItem('color')) {
        color = localStorage.getItem('color');
    }

    return color;
};

const getStorageTheme = () => {
    let theme = 'light-theme';
    if (localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme');
    }

    return theme;
};

const Themes = () => {
    const [showSwitcher, setshowSwitcher] = useState(false);
    const [color, setColor] = useState(getStorageColor());
    const [theme, setTheme] = useState(getStorageTheme());

    const changeColor = (color) => {
        setColor(color);
    };

    const toggleTheme = () => {
        if (theme === 'light-theme') {
            setTheme('dark-theme');
        } else {
            setTheme('light-theme');
        }
    };

    useEffect(() => {
        document.documentElement.style.setProperty('--first-color', color);
        localStorage.setItem('color', color);
    }, [color]);

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

  return (
    <div>
        <div className={`${showSwitcher ? 'show-switcher' : ''} style__switcher`}>
            <div className="switch__toggler"
                 onClick={() => setshowSwitcher(!showSwitcher)} >
                <FaCogs />
            </div>

            <div className="theme__toggler" onClick={toggleTheme}>
                {theme === 'light-theme' ? <FiMoon/> : <FiSun/> }
            </div>

            <h3 className="switcher__title">
                Style Switcher
            </h3>
            <div className="switcher__items">
                {themes.map((theme, index) => {
                    return (
                    <Themeitem key={index} {...theme} changeColor = {changeColor}/>
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