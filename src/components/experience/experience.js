import { BsFillBookmarkCheckFill } from "react-icons/bs";
import '../../styles/experience.css'

const Experience = () =>{
    return(
        <div id="experience">
            <h2>What Can I do?</h2> 
            <h4>My Experience</h4>
            <div className="container experience_container">
                <div className="frontend">
                    <h3>Front-end</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <BsFillBookmarkCheckFill className="detail-icon"/>
                            <div>
                                <h5>HTML</h5>
                                <small className="years">4+ Years</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsFillBookmarkCheckFill className="detail-icon"/>
                            <div>
                                <h5>CSS</h5>
                                <small className="years">4+ Years</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsFillBookmarkCheckFill className="detail-icon"/>
                            <div>
                            <i className="devicon-bootstrap-plain-wordmark colored">
                            </i>
                                <h5>BootStrap</h5>
                            
                                
                                <small className="years">3+ Years</small>
                            </div>

                        </article>
                        <article className="experience_details">
                            <BsFillBookmarkCheckFill className="detail-icon"/>
                            <div>
                                <h5>SaSS</h5>
                                <small className="years">3+ Years</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsFillBookmarkCheckFill className="detail-icon"/>
                            <div>
                                <h5>JavaScript</h5>
                                <small className="years">4+ Years</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsFillBookmarkCheckFill className="detail-icon"/>
                            <div>
                                <h5>React</h5>
                                <small className="years">4+ Years</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="backend">
                <h3>Back-end</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <BsFillBookmarkCheckFill className="detail-icon"/>
                            <div>
                                <h5>Node JS</h5>
                                <small className="years">4+ Years</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsFillBookmarkCheckFill className="detail-icon"/>
                            <div>
                                <h5>MongoDB</h5>
                                <small className="years">3+ Years</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsFillBookmarkCheckFill className="detail-icon"/>
                            <div>
                                <h5>PostgresSQL</h5>
                                <small className="years">3+ Years</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsFillBookmarkCheckFill className="detail-icon"/>
                            <div>
                                <h5>Python</h5>
                                <small className="years">2+ Years</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsFillBookmarkCheckFill className="detail-icon"/>
                            <div>
                                <h5>Django</h5>
                                <small className="years">2+ Years</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsFillBookmarkCheckFill className="detail-icon"/>
                            <div>
                                <h5>Express</h5>
                                <small className="years">3+ Years</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience