import React, { useState, Fragment } from "react"
import { Link } from "gatsby"
// @ts-ignore
import logo from "../images/logo-original.png"
import Logo from "./Logo"
import "./nav.css"
import Hamburger from "./Hamburger"
import MobileNav from "./MobileNav"
import EmailForm from "./EmailForm"

export default function Nav() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <div className="nav-container">
      <div className="nav-email">
        <EmailForm />
      </div>
      <nav className="nav">
        <div className="logo">
          <Logo src={logo} width={"100%"} />
        </div>
        <div className="menu">
          <a href="https://tickets.dannaroo.com/dannaroo/2019/" target="_blank">
            Tickets
          </a>
          <Link to="/lineup">Lineup</Link>
          <Link to="/lineup">Experience</Link>
        </div>
        <Hamburger
          handleClick={() => {
            setMobileNavOpen(!mobileNavOpen)
          }}
        />
        <MobileNav open={mobileNavOpen} />
      </nav>
    </div>
  )
}
