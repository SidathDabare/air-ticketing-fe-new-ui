/** @format */

import React from "react"
import "../style/HomePage.css"
import { Container } from "react-bootstrap"
import Footer from "../components/Footer"
import MyNavbar from "../components/MyNavbar"

const HomePage = () => {
  return (
    <div className='home-div-main'>
      <MyNavbar />
      <div className='home-div-container'>
        <Container className='home-div-content'>
          <h1>HOME</h1>
        </Container>
      </div>
      <Footer />
    </div>
  )
}

export default HomePage
