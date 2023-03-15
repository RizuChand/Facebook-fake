import React from 'react'
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

const Leftbar = () => {
  return (
    <div className='leftbar'>
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src="https://cdn1.katadata.co.id/media/images/thumb/2022/11/15/KARAKTER_ANIME_BERTOPENG-2022_11_15-18_10_40_cced41fbb63c9c8e03b45642db34230d_400x267_thumb.jpg" alt="" />
            <span>Brainzu</span>
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