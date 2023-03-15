import React from 'react'
import Post from '../post/Post';
import './posts.scss';

const Posts = () => {
    const datas = [
        {
            id : 1,
            userId:4,
            name : "yor forger",
            desc: "my name is yor forger im a killer and loid is wife",
            profilePic :"https://asset.kompas.com/crops/_oeodxCvxNKBEAou0rJl8O6T72U=/0x8:1759x1181/750x500/data/photo/2022/04/08/624f83cc9ff5a.jpeg",
            img : "https://cdn.idntimes.com/content-images/community/2022/09/img-20220912-185213-89c2614f83929c7e9b0faaddbd1bc1a5-8c326bfd3495c3cf954fd50a438ca5d2.jpg"
        },
        {
            id : 2,
            userId:3,
            name : "Lyod forger",
            desc: "my name is loid forger im a spy and king of harem",
            profilePic: "https://cdn.oneesports.id/cdn-data/sites/2/2021/12/Anime_SpyxFamily_Featured-1.jpg",
            img : "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/08/spy-x-family-loid-smiling.jpg"
        },
        {
            id : 3,
            userId:2,
            name : "bond forger",
            desc : "my name is bond",
            profilePic: "https://i.ytimg.com/vi/dTKFYPL4dDE/maxresdefault.jpg",
            img : "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/borf-1664897970.jpeg?crop=0.995xw:0.991xh;0,0&resize=480:*"
        },
        {
            id : 4,
            userId:1,
            name : "fiona forger",
            desc : "im loid is wife",
            profilePic: "https://api.duniagames.co.id/api/content/upload/file/13436194891677065102.jpg",
            img : "https://i.ytimg.com/vi/P0iPBYZtsic/maxresdefault.jpg"
        },
    ]
  return (
    <div className='posts'>
        {datas.map(data=>(
            <Post data={data} key={data.id}/>
        ))}
        </div>


  )
}

export default Posts