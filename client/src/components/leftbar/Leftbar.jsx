import React, { useContext } from 'react'
import './leftbar.scss'

import Friends from '../../assets/1.png'
import Groups from '../../assets/2.png'
import Market from '../../assets/3.png'
import Watching from '../../assets/4.png'
import Memories from '../../assets/5.png'
import Event from '../../assets/6.png'
import Gaming from '../../assets/7.png'
import Galery from '../../assets/8.png'
import Videos from '../../assets/9.png'
import Message from '../../assets/10.png'
import Tutorial from '../../assets/11.png'
import Course from '../../assets/12.png'
import Fund from '../../assets/13.png'
import { AuthContext } from '../../context/Auth'


const Leftbar = () => {
  const {currentUser} = useContext(AuthContext)
  return (
    <div className='leftbar'>
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
          </div>
          
         <div className="item">
          <img src={Friends} alt="" />
          <span>Friend</span>
        </div>
         <div className="item">
          <img src={Groups} alt="" />
          <span>Group</span>
        </div>
         <div className="item">
          <img src={Market} alt="" />
          <span>Marketplace</span>
        </div>
         <div className="item">
          <img src={Watching} alt="" />
          <span>Watch</span>
        </div>
         <div className="item">
          <img src={Galery} alt="" />
          <span>Galery</span>
        </div>
         <div className="item">
          <img src={Memories} alt="" />
          <span>Memories</span>
        </div>
        </div>

        <hr className='garis' />

        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
          <img src={Friends} alt="" />
          <span>Friend</span>
        </div>
         <div className="item">
          <img src={Groups} alt="" />
          <span>Group</span>
        </div>
         <div className="item">
          <img src={Market} alt="" />
          <span>Marketplace</span>
        </div>
         <div className="item">
          <img src={Watching} alt="" />
          <span>Watch</span>
        </div>
         <div className="item">
          <img src={Galery} alt="" />
          <span>Galery</span>
        </div>
         <div className="item">
          <img src={Memories} alt="" />
          <span>Memories</span>
        </div>
        </div>

        <hr className='garis'/>

        <div className="menu">
          <span>Others</span>
          <div className="item">
          <img src={Friends} alt="" />
          <span>Friend</span>
        </div>
         <div className="item">
          <img src={Groups} alt="" />
          <span>Group</span>
        </div>
         <div className="item">
          <img src={Market} alt="" />
          <span>Marketplace</span>
        </div>
         <div className="item">
          <img src={Watching} alt="" />
          <span>Watch</span>
        </div>
         <div className="item">
          <img src={Galery} alt="" />
          <span>Galery</span>
        </div>
         <div className="item">
          <img src={Memories} alt="" />
          <span>Memories</span>
        </div>
         <div className="item">
          <img src={Memories} alt="" />
          <span>Memories</span>
        </div>
         <div className="item">
          <img src={Memories} alt="" />
          <span>Memories</span>
        </div>
         <div className="item">
          <img src={Memories} alt="" />
          <span>Memories</span>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Leftbar