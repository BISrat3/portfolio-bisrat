import sample from "../../images/bisrat.png"
import "../../styles/header.css"
import Socials from "./Socials"

const Header = () =>{
    return (
        <>
        <header id="home">
            <div className="container header_container">
               <b><h1 ><strong>Bisrat Menberu Amtataw</strong></h1></b>
               <b><h2><strong>Software Engineer</strong></h2></b>
               <div className="myImage">
                    <img src={sample} alt="profileimage"/>
                </div>
            </div>
         </header>
        <Socials/>
        </>
    )
}

export default Header