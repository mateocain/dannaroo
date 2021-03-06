import React, { useState } from "react"
import { Link } from "gatsby"
import "./mobile-nav.css"
// @ts-ignore
import floralPrint from "../images/floral-print.jpg"
import EmailForm from "./EmailForm"

interface Props {
  open: boolean
  setClosed: () => void
}

export default function MobileNav({ open, setClosed }: Props) {
  const initialBgColor = "var(--c-neon-purple"
  const [bgColor, setBgColor] = useState(initialBgColor)

  function linkMouseOut() {
    setBgColor(initialBgColor)
  }

  return (
    <nav
      style={{
        display: open ? "block" : "none",
        backgroundColor: bgColor,
      }}
      className="mobile-menu"
    >
      <a
        onMouseEnter={() => setBgColor("var(--c-neon-orange)")}
        onMouseLeave={linkMouseOut}
        href="https://tickets.dannaroo.com/dannaroo/2019/"
        target="_blank"
        onClick={() => {
          setClosed()
        }}
      >
        Tickets
      </a>
      <Link
        onMouseEnter={() => setBgColor("var(--c-neon-blue)")}
        onMouseLeave={linkMouseOut}
        onClick={() => {
          setClosed()
        }}
        to="/lineup"
      >
        Lineup
      </Link>
      <Link
        onMouseEnter={() => setBgColor("var(--c-neon-yellow)")}
        onMouseLeave={linkMouseOut}
        to="/lineup"
        onClick={() => {
          setClosed()
        }}
      >
        Experience
      </Link>
      <div
        style={{ backgroundImage: `url(${floralPrint})` }}
        className="floral"
      ></div>
    </nav>
  )
}
