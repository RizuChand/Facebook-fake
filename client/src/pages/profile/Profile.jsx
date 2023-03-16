import "./profile.scss"
import Posts from '../../components/posts/Posts'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Profile = () => {
  return (
    <div className='profile'>
      <div className="images">
        <img className="cover" src="https://i.pinimg.com/originals/c0/c4/f0/c0c4f06b14625c8fb9c4cdcbaa58c6d8.png" alt="" />
        <img className="imgProfile" src="https://cdn1.katadata.co.id/media/images/thumb/2022/11/09/KARAKTER_ANIME_TERIMUT-2022_11_09-23_24_11_40afed16ccfe66e4587285ea8eaada1e_620x413_thumb.jpg" alt="" />
      </div>
      <div className="container">
        <div className="uInfo">
          <div className="left">
            <a href="www.facebook.com">
              <FacebookIcon fontSize="large"/>
            </a>
            <a href="www.twitter.com">
              <TwitterIcon fontSize="large"/>
            </a>
            <a href="www.instagram.com">
              <InstagramIcon fontSize="large"/>
            </a>
            <a href="www.linkedin.com">
              <LinkedInIcon fontSize="large"/>
            </a>

          </div>
          <div className="center">
            <span>aniya forger</span>
            <div className="info">
            <div className="item">
              <PlaceIcon/>
              <span>Westalis</span>
            </div>
            <div className="item">
              <LanguageIcon/>
              <span>anyakawai.com</span>
            </div>
            </div>
            <button>Follow</button>

          </div>


          <div className="right">
            <EmailIcon/>
            <MoreVertIcon/>

          </div>
        </div>
      <Posts/>
      </div>
    </div>
  )
}

export default Profile