import React from "react"
// @ts-ignore
import sonic from "../images/supersonic.png"
import "./sonic.css"

export default function Sonic() {
  return (
    <div
      className="sthh"
      style={{ backgroundImage: `url(${sonic})`, height: 46, width: 30 }}
    ></div>
  )
}
