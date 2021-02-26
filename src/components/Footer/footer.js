import "../Footer/footer.css"

import logo1 from "../../assets/GithubLogo.png"
import logo2 from "../../assets/LinkedlnLogo.png"
import logo3 from "../../assets/InstagramLogo.png"

const Footer = () =>{
    return(
        <div className="footer">
            <div className="container footerContent">
                <span id="email">moni9009@abv.bg</span>
                <div className="linebreaking">
                        <a href=""><img className="logos footer" src={logo1}/></a>
                        <a href=""><img className="logos linkedln footer" src={logo2}/></a>
                        <a href=""><img className="logos footer" src={logo3}/></a>
                </div>
            </div>
        </div>
    )
}

export default Footer