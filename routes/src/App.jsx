
import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar/>

      <Routes>
        <Route path="/" element = {<Home/>}></Route>
         <Route path="/about" element = {<About/>}></Route>
          <Route path="/contact" element = {<Contact/>}></Route>
      </Routes>
 
      <Footer/>
      
      
      </div>
  )
}

export default App