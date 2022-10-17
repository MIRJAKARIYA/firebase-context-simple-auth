import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";

const Header = () => {
  const {user, logOut} = useContext(AuthContext)

  const handleSignOut = () =>{
    logOut()
    .then(()=>{})
    .catch(err => console.log(err))
  }
  return (
    <div>
      <div class="navbar bg-base-100">
        <div class="flex-1">
          <Link to="/" className="ml-4">Home</Link>
          <Link to="/login" className="ml-4">Login</Link>
          <Link to="/register" className="ml-4">Register</Link>
          <Link to="/orders" className="ml-4">orders</Link>
        </div>
        <div class="flex-none">

          {user?.email && <span>Welcome, {user.email}</span>}
          {
            user?.email?<button className="btn btn-sm btn-primary" onClick={handleSignOut}>sign out</button>:<Link to='/login'>Login</Link>
          }
          
        </div>
      </div>
    </div>
  );
};

export default Header;
