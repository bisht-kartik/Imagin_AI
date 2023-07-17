import React from 'react'
import { Link } from 'react-router-dom'
import {useAuthState} from 'react-firebase-hooks/auth';
import {Auth} from "../firebase-config"
import {signOut} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';


const Navbar = () => {
  const [user]=useAuthState(Auth)
  const navigator = useNavigate()

  const logOut = async() => {
    await signOut(Auth)
    navigator("/")
  }

  return (
    <header>
    <h3 className='header-title'>ImaginAI</h3>
    <div className="menu">
    <Link className='link button2 m-2' to={"/"}>Home</Link>
    {user && <Link className='link button2 m-2'  to={"/generate"}> Generate</Link>}
    {user?
    <div className='link'><div className="d-flex">
      {user.displayName}
    <img className='logo' src={user.photoURL} alt={user.displayName} />
    <button onClick={logOut}><LogoutSharpIcon/></button>
    </div>  
    </div>
    :<Link className='link' to={"/login"}>Login</Link>
    }
    </div>
    </header>
  )
}
  export default Navbar