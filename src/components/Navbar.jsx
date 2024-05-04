import '../assets/css/Navbar.css';
import React, { useState } from 'react';

function Navbar(){

    const [animationStopped, setAnimationStopped] = useState(false);
    

    function handleStop() {
        setAnimationStopped(true);
    }

    return(
        <div className="navbar">
            <div className="navbar-inner">
                <img className={`logo-img ${animationStopped ? 'stopped' : ''}`} 
                src="../public/images/apple-touch-icon.png" 
                />
            </div> 
            <button className="stop-btn" onClick={handleStop}>
                <ion-icon className="stop-btn-icon" name="stop-circle-outline"></ion-icon>
            </button>
            
        </div>
    )
}

export default Navbar;

















