import React from "react"
import "./footer.css"
import Map from "./Map"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="info">
        <span>
          Crafted with Chaos by{" "}
          <a href="https://twitter.com/biggfatmatt">@biggfatmatt</a>
        </span>
        <span>
          Contact: <a href="mailto:dan@dannaroo.com">dan@dannaroo.com</a>
        </span>
        <span>
          Press: <a href="mailto:daniel@dannaroo.com">daniel@dannaroo.com</a>
        </span>
      </div>
    </footer>
  )
}
