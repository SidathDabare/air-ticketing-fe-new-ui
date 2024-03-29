/** @format */

import React from "react"
import { Button, Container } from "react-bootstrap"
import "../style/MyNavbar.css"
import BigLogo from "../assets/logo1.png"
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
                    className='profile-image'
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
                !showUserProfile
                  ? "user-profile-details-hide"
                  : "user-profile-details-show"
              }>
              <div className='col-12 d-flex p-2'>
                <div className='col-3'>
                  <img
                    src={loggedUser.avatar}
                    alt=''
                    className='menu-profile-image'
                  />
                </div>
                <div className='col-9 d-flex justify-content-center align-items-start flex-column'>
                  <h6 className='text-truncate mb-0'>
                    {" "}
                    {loggedUser.firstName} {loggedUser.lastName}
                  </h6>

                  <small>{loggedUser.email}</small>
                </div>
              </div>
              <div className='col-12 py-2'>
                <small>User role : {loggedUser.role}</small>
              </div>
              <div className='col-12 mb-auto'>
                <button className='btn btn-outline-info btn-block'>
                  LOG OUT
                </button>
              </div>
            </div>
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
