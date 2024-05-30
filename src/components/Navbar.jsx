import '../assets/css/Navbar.css'
import '../../public/images/favicon-16x16.png'
import { Link } from 'react-router-dom';

function Navbar(){
    return (
      <>
        
        <ul className="navbar lato-light">
        <Link to={`/`}><li>Home</li></Link>
          <Link to={`/about`}><li>About</li></Link>
        </ul>
        <img className="logo" src="../../public/images/android-chrome-192x192.png"></img>
      </>
    );
}

export default Navbar;