import React, { useContext } from 'react';
import { AuthContext } from '../../context/Auth';
import './stories.scss';

const Stories = () => {
    const {currentUser} = useContext(AuthContext)
    //Temporary dummy data
    const data = [
        {
            id : 1,
            name : "yor forger",
            img : "https://cdn.idntimes.com/content-images/community/2022/09/img-20220912-185213-89c2614f83929c7e9b0faaddbd1bc1a5-8c326bfd3495c3cf954fd50a438ca5d2.jpg"
        },
        {
            id : 2,
            name : "Lyod forger",
            img : "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/08/spy-x-family-loid-smiling.jpg"
        },
        {
            id : 3,
            name : "bond forger",
            img : "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/borf-1664897970.jpeg?crop=0.995xw:0.991xh;0,0&resize=480:*"
        },
        {
            id : 4,
            name : "fiona forger",
            img : "https://i.ytimg.com/vi/P0iPBYZtsic/maxresdefault.jpg"
        },
    ]
  return (
    <div className='stories'>
        
            <div className="story">
                <img src={currentUser.profilePic} alt="" />
                <span>{currentUser.name}</span>
            <button>+</button>
            </div>
        
        {data.map(data=>(
            <div className="story">
                <img src={data.img} alt="" />
                <span>{data.name}</span>
            </div>
        ))}
    </div>
  )
}

export default Stories