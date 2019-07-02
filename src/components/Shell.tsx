import React, { Fragment } from "react"
import Nav from "./Nav"
import "./shell.css"
import Footer from "./Footer"

export default function Shell({ children }) {
  return (
    <Fragment>
      <Nav />
      <div className="shell-body">
        {children}
        <Footer />
      </div>
    </Fragment>
  )
}
