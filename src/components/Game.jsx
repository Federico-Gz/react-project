import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Game.css';

function Game() {
    const [animationStopped, setAnimationStopped] = useState(false);
    const [animationComplete, setAnimationComplete] = useState(false);

    useEffect(() => {
        if (animationStopped) {
            // Simula l'animazione, aspettando 1 secondo
            setTimeout(() => {
                // Quando l'animazione è completa, imposta lo stato
                setAnimationComplete(true);
            }, 1500);
        }
    }, [animationStopped]);

    function handleStop() {
        setAnimationStopped(true);
    }

    return (
        <>
            <div className="navbar-inner">
                <img className={`logo-img ${animationStopped ? 'stopped' : ''}`} src="../public/images/apple-touch-icon.png" />
            </div>
            <button className="stop-btn" onClick={handleStop}>
                <ion-icon className="stop-btn-icon" name="stop-circle-outline"></ion-icon>
            </button>
            {animationComplete && <Link to={`/search`}><span className='start-button'>START TO SEARCH</span></Link>}
        </>
    )
}

export default Game;











