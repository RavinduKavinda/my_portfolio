import {
    FaHome,
    FaUser,
    FaFolderOpen,
    FaMailBulk,
    FaGraduationCap,
    FaCode,
  } from 'react-icons/fa';

import {
    PiCertificate
  } from 'react-icons/pi';

import { 
    FiFileText, 
    FiExternalLink 
  } from 'react-icons/fi';

import Theme01 from './assets/blue.png';
import Theme02 from './assets/gold.png';
import Theme03 from './assets/green.png';
import Theme04 from './assets/pink.png';
import Theme05 from './assets/purple.png';
import Theme06 from './assets/red.png';

import Project01 from './assets/project01.png';
import Project02 from './assets/project02.png';
import Project03 from './assets/project03.png';
import Project04 from './assets/project04.png';
import Project05 from './assets/project05.png';
import Project06 from './assets/icon.png';

{/* Nav Icons */}
export const links = [
    {
      id: 1,
      name: 'Home',
      icon: <FaHome className='nav__icon' />,
      path: '/',
    },
    {
      id: 2,
      name: 'About',
      icon: <FaUser className='nav__icon' />,
      path: '/about',
    },
    {
      id: 3,
      name: 'Project',
      icon: <FaFolderOpen className='nav__icon' />,
      path: '/project',
    },
    {
      id: 4,
      name: 'Contact',
      icon: <FaMailBulk className='nav__icon' />,
      path: '/contact',
    },
  ];

{/* Personal Info */}
export const personalInfo = [
    {
      id: 1,
      title: 'First Name : ',
      description: 'Ravindu',
    }, 
    {
      id: 2,
      title: 'Last Name : ',
      description: 'Kavinda',
    },
    {
      id: 3,
      title: 'Age : ',
      description: '23 Years',
    },
    {
      id: 4,
      title: 'Nationality : ',
      description: 'Sri Lankan',
    },
    {
      id: 5,
      title: 'Address : ',
      description: 'Gampaha',
    },
    {
      id: 6,
      title: 'Phone : ',
      description: '+94778356450',
    },
    {
      id: 7,
      title: 'Email : ',
      description: 'dlravindukavinda@mail.com',
    },
    {
      id: 8,
      title: 'Langages : ',
      description: 'English, Sinhala',
    },
  ];

{/* Skills */}
export const skills = [
    {
      id: 1,
      title: 'Html',
      percentage: '80',
    },
    {
      id: 2,
      title: 'Javascript',
      percentage: '70',
    },
    {
      id: 3,
      title: 'CSS',
      percentage: '70',
    },
    {
      id: 4,
      title: 'ReactJS',
      percentage: '60',
    },
    {
      id: 5,
      title: 'Tailwind CSS',
      percentage: '60',
    }, 
    {
      id: 6,
      title: 'Python',
      percentage: '30',
    },
    {
      id: 7,
      title: 'NodeJS',
      percentage: '30',
    },
    {
      id: 8,
      title: 'PHP',
      percentage: '20',
    },
    {
      id: 9,
      title: 'ExpressJS',
      percentage: '20',
    },
    {
      id: 10,
      title: 'C#',
      percentage: '40',
    },
    {
      id: 11,
      title: 'MongoDB',
      percentage: '40',
    },
    {
      id: 12,
      title: 'MYSQL',
      percentage: '40',
    }, 
  ];

{/* Education */}
export const education = [
    {
        id: 1,
        category: 'education',
        icon: <FaGraduationCap />,
        year: '2021-PRESENT',
        title: 'B.sc (Hons) in Software Engineering <span> University of Kelaniya </span>',
    },
    {
        id: 2,
        category: 'education',
        icon: <FaGraduationCap />,
        year: '2019',
        title: 'GCE Advanced level (Physical Science Stream)<span> Bandaranayake Central College </span>',
    },
    {
        id: 3,
        category: 'education',
        icon: <FaGraduationCap />,
        year: '2016',
        title: 'GCE Ordinary level <span> Bandaranayake Central College – Veyangoda </span>',
    },
  ];

export const certifacate = [
    {
        id: 1,
        category: 'certifacate',
        icon: <PiCertificate />,
        year: '2023',
        title: 'Introduction to Front-End Development <span> Meta </span>',
        link: 'https://coursera.org/share/1281e2b10e673a01f11d08e06ad91a5e',
    },
    {
      id: 2,
      category: 'certifacate',
      icon: <PiCertificate />,
      year: '2023',
      title: 'Introduction to Android Mobile Application Development <span> Meta </span>',
      link: 'https://www.coursera.org/account/accomplishments/verify/RR6E365253CS?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course',
  },
  ];

{/* Projects */}
export const projects = [
    {
      id: 1,
      img: Project01,
      title: 'Dr onCall',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Doctor Appointment System',
        },
        
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'react js, node js,  express js, MongoDB',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'https://github.com/RavinduKavinda/doctor-appointment-booking',
        },
      ],
    },
    {
        id: 2,
        img: Project02,
        title: 'Sporty Store',
        details: [
          {
            icon: <FiFileText />,
            title: 'Project : ',
            desc: 'E Commerce Web Page Front-End',
          },
          
          {
            icon: <FaCode />,
            title: 'Language : ',
            desc: 'react js',
          },
          {
            icon: <FiExternalLink />,
            title: 'Preview : ',
            desc: 'https://github.com/desilva-se19047/ecommerce-frontend-group-project',
          },
        ],
      },
    {
        id: 3,
        img: Project03,
        title: 'Snake Game',
        details: [
          {
            icon: <FiFileText />,
            title: 'Project : ',
            desc: 'Snake Game',
          },
          
          {
            icon: <FaCode />,
            title: 'Language : ',
            desc: 'HTML, CSS, JavaScript',
          },
          {
            icon: <FiExternalLink />,
            title: 'Preview : ',
            desc: 'https://github.com/RavinduKavinda/Snake-Game',
          },
        ],
      },
    {
        id: 4,
        img: Project04,
        title: 'Discord Bot',
        details: [
          {
            icon: <FiFileText />,
            title: 'Project : ',
            desc: 'Discord Music Bot',
          },
          
          {
            icon: <FaCode />,
            title: 'Language : ',
            desc: 'Python',
          },
          {
            icon: <FiExternalLink />,
            title: 'Preview : ',
            desc: 'https://github.com/RavinduKavinda/discord_bot',
          },
        ],
      },
    {
        id: 5,
        img: Project05,
        title: 'Blog-Matrix Frontend',
        details: [
          {
            icon: <FiFileText />,
            title: 'Project : ',
            desc: 'Online Blog Website',
          },
          
          {
            icon: <FaCode />,
            title: 'Language : ',
            desc: 'React CSS HTML',
          },
          {
            icon: <FiExternalLink />,
            title: 'Preview : ',
            desc: 'https://github.com/RavinduKavinda/blogmatrix',
          },
        ],
      },
    /*{
        id: 6,
        img: Project06,
        title: 'Doctor Appointment System',
        details: [
          {
            icon: <FiFileText />,
            title: 'Project : ',
            desc: 'Doctor Appointment System',
          },
          
          {
            icon: <FaCode />,
            title: 'Language : ',
            desc: '',
          },
          {
            icon: <FiExternalLink />,
            title: 'Preview : ',
            desc: '',
          },
        ],
      },*/
    ];

{/*Theme*/}
export const themes = [
    {
      id: 1,
      img: Theme01,
      color: '#0984e3',
    }, 
    {
      id: 2,
      img: Theme02,
      color: '#fdcb6e',
    }, 
    {
      id: 3,
      img: Theme03,
      color: '#00b894',
    }, 
    {
      id: 4,
      img: Theme04,
      color: '#e84393',
    },  
    {
      id: 5,
      img: Theme05,
      color: '#a29bfe',
    }, 
    {
      id: 6,
      img: Theme06,
      color: '#d63031',
    },
  ];
  