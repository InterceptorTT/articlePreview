import './App.css'
import "./assets/index.scss"
import drawer from "./images/drawers.jpg"
import facebook from "./images/icon-facebook.svg"
import pinterest from "./images/icon-pinterest.svg"
import twitter from "./images/icon-twitter.svg"
import avatar from "./images/avatar-michelle.jpg"
import share from "./images/icon-share.svg"
import { useState } from 'react'

function App() {
  const [popUp , setPopUp] = useState(false);

  const openPopUp = () => {
    setPopUp(true)
  }

  const closePopUp = () => {
    setPopUp(false)
  }

  return (
    <>
      <div className="container flex">
        <div className="hero">
          <img src={drawer} alt="" />
        </div>
        <div className="side">
          <h1 className="title fw-bold clr-primary-100">
            Shift the overall look and feel by adding these wonderful 
            touches to furniture in your home
        </h1>
        <p className="para clr-primary-300">
             Ever been in a room and felt like something was missing? Perhaps 
            it felt slightly bare and uninviting. I’ve got some simple tips 
            to help you make any room feel complete.
        </p>

            {popUp && (<div className="social-icon" onClick={closePopUp}>
              <ul >
                <li><a href="#">Share</a></li>
                <li><a href="#"><img src={facebook} alt="" /></a></li>
                <li><a href="#"><img src={pinterest} alt="" /></a></li>
                <li><a href="#"><img src={twitter} alt="" /></a></li>
              </ul>
            </div>
                )}
        <div className="user">
            <div className="user-data">
                <img src={avatar} alt="" />
                <div className="user-data-name">
                    <h2 className="name fw-bold">Michelle Appleton</h2>
                    <p>28 Jun 2020</p>
                </div>
            </div>
            <div className="share">
                <img onClick={openPopUp} src={share} alt="" />
            </div>
        </div>
        </div>
        
      </div>
    </>
  )
}

export default App
