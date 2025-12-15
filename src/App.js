
import React, { useState, useEffect } from "react"
import { Navigation } from "./components/navigation"
import { Header } from "./components/header"
import { Features } from "./components/features"
import { About } from "./components/about"
import { Services } from "./components/services"
import { Gallery } from "./components/gallery"
import { PieEquinoVaro } from "./components/PieEquinoVaro"
import {Empoderamiento} from "./components/empoderamiento"
import {FundacionZua} from "./components/FundacionZua"
import {AnaValentina} from "./components/AnaValentina"
import {CentroMya} from "./components/centroMya"
import { Team } from "./components/Team"
import { Contact } from "./components/contact"
import JsonData from "./data/data.json"
import SmoothScroll from "smooth-scroll"
//import logo from './logo.svg'
import Inicio from './components/Inicio'
import History from './components/history'
import './App.css'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})
function App() {
   const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])
  return (
    <div className="App">
      <Navigation />
      <Header data={landingPageData.Header} />
      <Inicio/>
      <About data={landingPageData.About} />
      <History/>
      <Team data={landingPageData.Team} />
      <Services data={landingPageData.Services} />
      <PieEquinoVaro/>
      <Empoderamiento/>
      <FundacionZua/>
      <CentroMya/>
      <AnaValentina/>
      <img src="img/Distrito.png" className="img-responsive" alt=""  style={{justifySelf:'center'}}/>{" "}
      <Features data={landingPageData.Features} />
      <Gallery data={landingPageData.Gallery} />
      {/*<<Liquors data={landingPageData.Liquors} />
      Features data={landingPageData.Features} />
      <Testimonials data={landingPageData.Testimonials} />*/}
      
      <Contact data={landingPageData.Contact} />
    </div>
  )
}

export default App
