import about from "./about.css";
import Programming from "../../img/programming.jpeg";
import Award from "../../img/award.jpg";


export const About = (props) => {
    return (
        <div className="a" id="about">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={Programming} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title"> {props.aboutTitle} </h1>
                <p className="a-sub">
                    { props.aboutText1 }
                </p>
                <p className="a-desc">
                    { props.aboutText2 }
                </p>
                <div className="a-award">
                    <a href="http://n-analytics.herokuapp.com" target="_blank" rel="noreferrer"> <img src={Award} alt="" className="a-award-img" /> </a> 
                    <div className="a-award-texts">
                        <h4 className="a-award-title"> { props.awardTitle } </h4>
                        <p className="a-award-desc">
                            { props.awardText }
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
