import '../assets/css/Navbar.css'
import '../../public/images/favicon-16x16.png'

function Navbar(){
    return (
      <>
        
        <ul className="navbar lato-light">
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
        <img className="logo" src="../../public/images/android-chrome-192x192.png"></img>
      </>
    );
}

export default Navbar;