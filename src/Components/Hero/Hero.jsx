import "./Hero.css"
import { MdArrowForward } from 'react-icons/md'

const Hero = (props) => {
    return ( 
        <div>
            <div className="overlay">
            <div className="sub-section">
                    <div className="container">
                    <h1>{props.firstElement}</h1>
                    {/* <p>{props.text}</p> */}
                    <div className="cto">
                        <a id="sign" href="#">Show now <MdArrowForward size="1rem" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero