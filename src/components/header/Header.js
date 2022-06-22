import sample from "../../images/bisrat.png"
import "../../styles/header.css"
import Socials from "./Socials"

const Header = () =>{
    return (
        <header id="home">
            <div className="container header_container">
               <h1>Bisrat Menberu Amtataw</h1>
               <h5 className="text-light">Software Engineer</h5>
               <Socials/>
               <div className="myImage">
                    <img src={sample} alt="profileimage"/>
                </div>
            </div>
        </header>
    )
}

export default Header