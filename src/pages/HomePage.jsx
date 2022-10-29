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
      <Container className='home-div-content'>
        <h1>HOME</h1>
      </Container>
      <Footer />
    </div>
  )
}

export default HomePage
