import React, { Fragment, useState } from "react"
import Splash from "../components/Splash"
import Shell from "../components/Shell"
import Countdown from "../components/FestivalCountdown"
import Sonic from "../components/Sonic"
import "../styles/home.css"
// @ts-ignore
import presale from "../images/gallery/presale.jpg"
// @ts-ignore
import exp from "../images/gallery/experiences.jpg"
// @ts-ignore
import trans from "../images/gallery/transportation.jpg"

export default function IndexPage() {
  const [splashComplete, setSplashComplete] = useState(false)

  return (
    <Fragment>
      {!splashComplete && <Splash setComplete={setSplashComplete} />}
      <Shell>
        <div className="hp--countdown">
          <Countdown />
          <h3>To Meyhem</h3>
        </div>
        <div className="sonic-track">
          <Sonic />
        </div>
        <div className="hp--content">
          <div className="presale">
            <div
              style={{
                backgroundImage: `url(${presale})`,
              }}
            ></div>
            <div>
              <span>
                <a href="/">Kickback Presale</a>
              </span>
            </div>
          </div>
          <div className="experiences">
            <div
              style={{
                backgroundImage: `url(${exp})`,
              }}
            ></div>
            <div>
              <span>
                <a href="/">Experiences</a>
              </span>
            </div>
          </div>
          <div className="transportation">
            <div
              style={{
                backgroundImage: `url(${trans})`,
              }}
            ></div>
            <div>
              <span>
                <a href="/">Transportation</a>
              </span>
            </div>
          </div>
        </div>
      </Shell>
    </Fragment>
  )
}
