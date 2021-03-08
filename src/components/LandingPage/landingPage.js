
import { Button } from 'react-bootstrap';
import "./landingPage.css"

import logo1 from "../../assets/GithubLogo.png"
import logo2 from "../../assets/LinkedlnLogo.png"
import logo3 from "../../assets/InstagramLogo.png"

const LandingPage = () =>{
    return (
        <div>      
            <div className="headerContent">
                <h1 className="nameTag">Drislio1</h1>
                <span className="email">moni9009@abv.bg</span>
                <div className="shiftLane">
                    <span>/Web Developer</span>
                </div>
                <div className="shiftLane">
                    <span>/Software Engineer</span>
                </div>
                <Button id="btnGetcv" variant="outline-dark">Get CV</Button>
                <div className="contactDetails">
                    <span className="getInTouch">Get in touch</span>
                    <div className="links">
                        <a href=""><img className="logos" src={logo1}/></a>
                        <a href=""><img className="logos linkedln" src={logo2}/></a>
                        <a href=""><img className="logos" src={logo3}/></a>
                    </div>
                </div>
            </div>  
            <hr className="container" />    
        </div>
    )
}
export default LandingPage