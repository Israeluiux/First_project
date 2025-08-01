import "./Header.css"
import { Link } from "react-router-dom"
import image from "../assets/react.svg"

const Header = () => {
    return (
        <div className="section">
            {/* logo section */}
            <div className="logo" style={{display: 'flex'}}><img src={image} alt="" /><p>Logo</p></div>
            {/* nav links */}
            <ol className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/service">Service</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ol>
            {/* CTA's */}
            <div className="cto">
                <a className="signup">Sign up</a>
                <a className="login">Login</a>
            </div>
        </div>
    )
}

export default Header