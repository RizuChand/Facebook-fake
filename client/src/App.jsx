
import './App.css';
import { Login } from './pages/login/Login';
import { Register} from './pages/register/Register'
import { Navbar } from './components/navbar/Navbar'
import { Home } from './pages/home/Home';
import Leftbar from './components/leftbar/Leftbar';
import Rightbar from './components/rightbar/Righbar'
import Profile  from './pages/profile/Profile';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";


const Layout = () => {
  return(
    <div>
      <Navbar/>
      <div style={{display : 'flex'}}>
        <Leftbar/>
        <Outlet/>
        <Rightbar/>
      </div>
    </div>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element : <Home/>
      },
      {
        path: "/profile/:id",
        element : <Profile/>
      },
    ]
    
  },
  {
    path: "/login",
    element: <Login/>,
    
  },
  {
    path: "/register",
    element: <Register/>,
    
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
