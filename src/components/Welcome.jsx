import '../assets/css/Welcome.css';

function Welcome(){


    return(
        <div className="welcome">
            <h1 className="welcome-title">Welcome to VeggieRecipesVault</h1>
            <h3 className="welcome-description">Stop the animation below to unlock a new button</h3>
            
            <img className="scroll-down-btn" src="/public/images/arrow-animation.gif" />
            
        </div>
    )
}

export default Welcome;