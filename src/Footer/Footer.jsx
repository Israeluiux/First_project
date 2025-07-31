import "./Footer.css"
import image from "../assets/react.svg"

const Footer = () => {
    return (
        <div>
        <div className="main-section">
            <div className="footer-container">
                <div className="top">
                    <div className="topperr">
                {/* left side of the footer */}
                <div className="left-section">
                    <div style={{display: 'flex'}}><img src={image} alt="" /><h2>Logo</h2></div>
                    <input type="text" name="" id="input" placeholder="Subscribe for our newsletter" /><button className="btn">Subscribe</button>
                </div>
                {/* right side of the footer */}
            <div class="footer-right">
              <div class="right">
                <div class="h1">Contact us</div>
                <div>
                  <ul class="list">
                    <li>+234 812 3456 7899</li>
                    <li>info@gmail.com</li>
                    <li>
                      Plot 12, PMB 231489 George st, sydney NGW, Australia
                    </li>
                  </ul>
                </div>
              </div>

              <div class="right">
                <div class="h1">Quick links</div>
                <div>
                  <ul class="list">
                    <li>About Us</li>
                    <li>Our Work</li>
                    <li>Our Impact</li>
                  </ul>
                </div>
              </div>

              <div class="right">
                <div class="h1">Social Media</div>
                <div>
                  <ul class="list">
                    <li>Instagram</li>
                    <li>LinkedIn</li>
                    <li>X(Twitter)</li>
                  </ul>
                </div>
              </div>
                </div>
                </div>
            {/* end of footer */}
               </div>
            <div className="bottom">Logooo</div>
            </div>
        </div>
        </div>
    )
}

export default Footer