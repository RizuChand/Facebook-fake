import "./login.scss"
import { Link } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../../context/Auth";

export const Login = () => {

    const {login} = useContext(AuthContext);

    const handleLogin = ()=>{
        login();
    }
  return (
    <div className="login">
        <div className="card">
            <div className="left">
                <h1>Hello World</h1>
                <p>Sebuah aplikasi ajang maen sosial media keur ngabagi informasi nu kira na penting ceuk anjen</p>
                <span>don't you have account yet?</span>
                <Link to="/register">
                <button>Register</button>
                </Link>
            </div>
            <div className="right">
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button onClick={handleLogin}>Login</button>
                </form>

            </div>
        </div>
    </div>
  )
}
