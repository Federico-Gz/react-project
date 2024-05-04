import '../assets/css/Welcome.css';

function Welcome(){

    function handlerClick(){
        alert("welcome");
    }

    return(
        <div className="welcome">
            <h1 className="welcome-title lato-light">Welcome to VeggieRecipesVault</h1>
            <h3 className="welcome-description lato-thin">Scroll To Find The Right Veggie Recipe For Your Meal</h3>
            <button className="scroll-down-btn" onClick={handlerClick} >
                <img src="../public/images/arrow-animation.gif" />
            </button>
        </div>
    )
}

export default Welcome;