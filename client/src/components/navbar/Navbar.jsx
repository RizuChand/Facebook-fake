import React from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import SearchIcon from '@mui/icons-material/Search';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';
import { AuthContext } from '../../context/Auth';


export const Navbar = () => {
  const {toggle, darkMode} = useContext(DarkModeContext)
  const {currentUser} = useContext(AuthContext)


  return (
    <div className='navbar' >
      <Link to="#" style={{textDecoration : "none"}}>
      <div className="left" >
        <span>Reinsosial</span> 
        <HomeIcon/>
        {darkMode ? <LightModeIcon onClick={toggle} /> : <NightsStayIcon onClick={toggle} />}
        <AppsIcon/>
        <div className="search">
          <SearchIcon/>
          <input type="text" placeholder='Search here' />
        </div>
        </div>
      </Link>
      <div className="right">
        <PersonIcon/>
        <EmailIcon/>
        <NotificationsActiveIcon/>
        <div className="user">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  )
}

