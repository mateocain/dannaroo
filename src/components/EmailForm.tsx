import React from "react"
import "./emailform.css"

export default function EmailForm() {
  return (
    <form className="email-form">
      <input placeholder="Trade your email for spam" type="email"></input>
      <button type="submit">Spam Me</button>
    </form>
  )
}
