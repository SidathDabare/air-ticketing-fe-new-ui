/** @format */

import React from "react"
import { Container } from "react-bootstrap"
import "../style/MyNavbar.css"
import BigLogo from "../assets/logo.png"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { useState } from "react"

import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import { useEffect } from "react"

const MyNavbar = () => {
  const loggedUser = useSelector((state) => state.userReducer.loggedInUser)

  const [showUserProfile, setShowUserProfile] = useState(false)
  const [toggleBtn, setToggleBtn] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  console.log(showUserProfile)
  useEffect(() => {}, [])
  return (
    <div className='navbar-div-main'>
      <Container className='navbar-div-container px-0'>
        <div className='logo-div'>
          <img src={BigLogo} alt='' />
        </div>
        <div className='nav-menu-div'>
          <div className='nav-menu'>
            <Link className='nav-menu-items'>Home</Link>
            <Link className='nav-menu-items'>Home</Link>
            <Link className='nav-menu-items'>Home</Link>
            <Link className='nav-menu-items'>Home</Link>
          </div>
          <div className='user-profile'>
            {loggedUser ? (
              <>
                <div className='profile-div mr-2'>
                  <img
                    src={loggedUser.avatar}
                    alt=''
                    className='profile-image '
                  />
                </div>{" "}
                <span className='text-truncate'>
                  {" "}
                  Hello, {loggedUser.firstName}
                </span>
                {!showUserProfile ? (
                  <KeyboardArrowDownIcon
                    className='profile-toggle-btn'
                    onClick={() => setShowUserProfile(!showUserProfile)}
                  />
                ) : (
                  <KeyboardArrowUpIcon
                    className='profile-toggle-btn'
                    onClick={() => setShowUserProfile(!showUserProfile)}
                  />
                )}
              </>
            ) : (
              <div>
                <AccountCircleIcon />
                <Link to='./login'>LOGIN</Link>
              </div>
            )}

            <div
              className={
                showUserProfile ? "user-profile-details-hide" : "d-none"
              }></div>
          </div>
        </div>
        <div
          className='toggle-btn'
          onClick={() => {
            setToggleBtn(!toggleBtn)
            setShowMenu(!showMenu)
          }}>
          <div
            className={
              !toggleBtn
                ? "line1 back-toggle-btn-left"
                : "line1 toggle-btn-left"
            }></div>
          <div className={!toggleBtn ? "line2" : "toggle-btn-hide"}></div>
          <div
            className={
              !toggleBtn
                ? "line3 back-toggle-btn-right"
                : "line3 toggle-btn-right"
            }></div>
        </div>
        <div
          className={
            showMenu
              ? "nav-menu-small hide-nav-menu"
              : "nav-menu-small show-nav-menu"
          }></div>
      </Container>
    </div>
  )
}

export default MyNavbar
