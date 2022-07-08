import sample from "../../images/bisrat.png"
import "../../styles/header.css"
import Socials from "./Socials"

const Header = () =>{
    return (
        <>
        <header id="home">
            <div className="container header_container">
               <h1>Bisrat Menberu Amtataw</h1>
               <h2>Software Engineer</h2>
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