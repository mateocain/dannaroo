import React, { Fragment } from "react"
import Shell from "../components/Shell"
import "../styles/lineup.css"

export default function LineupPage() {
  return (
    <Fragment>
      <Shell>
        <div className="splash-container-lineup">
          <div className="wrapper">
            <div className="bottom">
              <div>
                <span
                  style={{
                    fontSize: "2.7rem",
                    color: "var(--c-neon-orange)",
                    fontWeight: "bold",
                  }}
                >
                  Andy's Xylophone Band
                </span>
              </div>
              <div>
                <span
                  style={{
                    fontSize: "2.7rem",
                    color: "var(--c-neon-yellow)",
                    fontWeight: "bold",
                    animationDelay: "100ms",
                  }}
                >
                  Gypsy Thunderpole
                </span>
              </div>
              <div>
                <span
                  style={{
                    fontSize: "1.5rem",
                    color: "var(--c-neon-blue)",
                    animationDelay: "200ms",
                  }}
                >
                  Chaz Shampoo and the Spectacular Backpack
                </span>
              </div>
              <div style={{ marginTop: 4 }}>
                <span
                  style={{
                    fontSize: "1.5rem",
                    color: "var(--c-neon-green)",
                    animationDelay: "300ms",
                  }}
                >
                  Stuchcast (Live Podcast and Standup)
                </span>
              </div>
              <div style={{ marginTop: 4 }}>
                <span
                  style={{
                    fontSize: "1.5rem",
                    color: "var(--c-neon-orange)",
                    margin: "0 8px",
                    animationDelay: "400ms",
                  }}
                >
                  AJ's Boxers
                </span>
                <span
                  style={{
                    fontSize: "1.5rem",
                    color: "var(--c-neon-pink)",
                    margin: "0 8px",
                    animationDelay: "500ms",
                  }}
                >
                  C-Rap-Tastic
                </span>
                <span
                  style={{
                    fontSize: "1.5rem",
                    color: "var(--c-neon-yellow)",
                    margin: "0 8px",
                    animationDelay: "600ms",
                  }}
                >
                  The Rising
                </span>
                <span
                  style={{
                    fontSize: "1.5rem",
                    color: "var(--c-neon-green)",
                    margin: "0 8px",
                    animationDelay: "700ms",
                  }}
                >
                  Yes Control
                </span>
              </div>
              <div style={{ marginTop: 4 }}>
                <span
                  style={{
                    fontSize: "1.5rem",
                    color: "var(--c-neon-blue)",
                    animationDelay: "700ms",
                  }}
                >
                  And Many More!
                </span>
              </div>
            </div>
          </div>
        </div>
      </Shell>
    </Fragment>
  )
}
