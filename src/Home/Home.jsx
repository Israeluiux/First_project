import  "./Home.css"
import Hero from "../Components/Hero/Hero.jsx"
import Cards from "../Components/Cards/Cards.jsx"
import Contact from "../Contact/Contact.jsx"
import Data from "../Components/Data.js"
// loop through the data
// select each key
// display the values

const Home = () => {
    return (
        <div>
            <div className="main-section">
                  <Hero firstElement="Welcome to the HomePage" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quae?  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta obcaecati facilis itaque maxime cupiditate, quo tempore voluptate"/>
            </div>

            <div className="body-section">
                <h2 className="head">What we do at Logoo</h2>
                <div className="small-cards">
                    {
                        Data.map((each) => (
                            <Cards first={each.name} text={each.description}/>
                        ))
                    }
                </div>
            </div>
            <Contact />
        </div>
    )
}

export default Home
