import React from "react"
import Countdown from "react-countdown-now"
import { EVENT_DATE } from "../constants"
import "./festival-countdown.css"

function renderer(props) {
  return (
    <div className="festival-countdown">
      <div>
        <span>{props.days}</span>
        <span>Days</span>
      </div>
      <div>
        <span>{props.hours}</span>
        <span>Hours</span>
      </div>
      <div>
        <span>{props.minutes}</span>
        <span>Minutes</span>
      </div>
      <div>
        <span>{props.seconds}</span>
        <span>Seconds</span>
      </div>
    </div>
  )
}

export default function FestivalCountdown() {
  return <Countdown date={EVENT_DATE} renderer={renderer} />
}
