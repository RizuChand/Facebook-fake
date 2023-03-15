
import './App.scss';
import { Login } from './pages/login/Login';
import { Register} from './pages/register/Register'
import { Navbar } from './components/navbar/Navbar'
import { Home } from './pages/home/Home';
import Leftbar from './components/leftbar/Leftbar';
import Rightbar from './components/rightbar/Righbar'
import Profile  from './pages/profile/Profile';
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";

const currentUser = true;

const Layout = () => {
  return(
    <div className='theme-dark'>
      <Navbar/>
      <div style={{display : 'flex'}}>
        <Leftbar/>
        <div style={{flex:'6'}}>
        <Outlet/>
        </div>
        <Rightbar/>
      </div>
    </div>
  )
}
const ProtectedRoute = ({children}) => {
  if(!currentUser) {
    return <Navigate to="/login" />
  }
  return children;
} 

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute>
              <Layout/>
            </ProtectedRoute>,
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
