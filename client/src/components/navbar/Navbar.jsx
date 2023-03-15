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
export const Navbar = () => {
  return (
    <div className='navbar' >
      <Link to="#" style={{textDecoration : "none"}}>
      <div className="left" >
        <span>Reinsosial</span> 
        <HomeIcon/>
        <NightsStayIcon/>
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
          <img src="https://cdn1.katadata.co.id/media/images/thumb/2022/11/15/KARAKTER_ANIME_BERTOPENG-2022_11_15-18_10_40_cced41fbb63c9c8e03b45642db34230d_400x267_thumb.jpg" alt="" />
          <span>Brainzu</span>
        </div>
      </div>
    </div>
  )
}

