import './post.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import { Link } from "react-router-dom";
import Comments from '../comments/Comments';
import { useState } from 'react';

const Post = ({data}) => {
  const liked = false;
  const dislike = false;

  const [commentOpen, setCommentOpen] = useState(false);

  return (
    <div className='post'>
      <div className="container">

      
      <div className="user">
        <div className="userInfo">
          <img src={data.profilePic} alt="" />
          <div className="detail">
            <Link to={`/profile/${data.userId}`} style={{textDecoration : "none", color: "inherit"}}>
            <span className='name'>{data.name}</span>
            <span className='date'>1 min ago</span>
            </Link>
          </div>

        </div>
        <MoreVertIcon/>
      </div>
      <div className="content">
        <p>{data.desc}</p>
        <img src={data.img} alt="" />

      </div>
      <div className="respon">
        <div className="item">

          {liked ? <ThumbUpIcon style={{color: "#2faad6"}} /> : <ThumbUpIcon />}
          <span>200 like</span>
          {dislike ? <ThumbDownOffAltIcon/> : <ThumbDownAltIcon/>}
          <span>41 dislike</span>
          
          
        </div>
        <div className="item" onClick={()=>{setCommentOpen(!commentOpen)}}>
          <span>12 comemnts</span>
          <CommentIcon/>
        </div>

      </div>
      {commentOpen && <Comments/>} 
      </div>
    </div>
  )
}

export default Post