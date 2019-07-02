import React, { useRef } from "react"
import "./hamburger.css"

interface Props {
  handleClick: () => void
}

export default function Hamburger({ handleClick }: Props) {
  const button = useRef(null)

  function _handleClick() {
    if (handleClick) {
      handleClick()
    }
    button.current.classList.toggle("active")
  }

  return (
    <button ref={button} onClick={_handleClick} className="hamburger">
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </button>
  )
}
