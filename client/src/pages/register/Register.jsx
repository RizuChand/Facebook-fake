import "./register.scss"
import { Link } from "react-router-dom"
export const Register = () => {
  return (
    <div className="register">
        <div className="card">
            <div className="left">
                <h1>Sosial Media</h1>
                <p>Masuk dan nikmatilah berjalajah di dunia sosial media ini</p>
                <span>do you have account?</span>
                {/* <Link to="/login"> */}
                <button>Login</button>
                {/* </Link> */}
            </div>
            <div className="right">
                <h1>Register</h1>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="text" placeholder="Name" />
                    <button>Register</button>
                </form>

            </div>
        </div>
    </div>
  )
}
