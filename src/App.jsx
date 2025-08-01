import { BrowserRouter as Routers, Routes, Route } from "react-router-dom"
import Home from "./Home/Home.jsx"
import Header from "./Header/Header.jsx"
import Footer from "./Footer/Footer.jsx"
import About from "./About/About.jsx"
import Service  from "./Services/Service.jsx"
import Contact from "./Contact/Contact.jsx"
import './App.css'

function App() {

  return (
    <Routers>
      <Header />
      <Routes>
        <Route path="/" element= {<Home />}  />
        <Route path="/about" element= {<About />}  />
        <Route path="/service" element= {<Service />}  />
        <Route path="/contact" element= {<Contact />}  />
      </Routes>
       <Footer />
    </Routers>
  )
  
}

export default App
