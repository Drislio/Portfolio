import "./project.css"
import { Button } from 'react-bootstrap';
import Image from "../../assets/PhoneFrame.png"
import Image2 from "../../assets/WeatherApp.webp"
import Image3 from "../../assets/reactLogo.png"

const Project = () =>{
    return(
        <div id="container">
            <div className="projectInfo">
                <div className="heading">
                    <span>PROJECT</span>
                </div>
                <div className="projectTitle">
                    <h1>Weather App</h1>
                </div>
                <div className="projectDescription">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius perferendis incidunt quos recusandae porro reprehenderit eaque ducimus quisquam nam ad, nisi beatae consequuntur illo possimus quas, voluptas tempore dolor aut!
                </div>
                <Button id="btnGetcv" variant="outline-dark">View More</Button>
            </div>
            <div className="imagesContainer">
                <a href=""><img className="phonePhoto" src={Image} alt=""/></a>
                <a href=""><img className="webPhoto" src={Image2} alt=""/></a>
                <div className="technologies">
                    <span>Technologies</span>
                    <div className="projectLogos">
                        <img className="reactLogo" src={Image3} alt=""/>
                        <img className="reactLogo" src={Image3} alt=""/>
                        <img className="reactLogo" src={Image3} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Project