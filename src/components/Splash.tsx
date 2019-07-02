import React, { useEffect, useState, useRef } from "react"
import Logo from "./Logo"
// @ts-ignore
import logo from "../images/logo-original.png"
import { EVENT_DATE } from "../constants"
import "./splash.css"
import Loader from "react-loader-spinner"

interface Props {
  setComplete: (isComplete: boolean) => void
}

export default function Splash({ setComplete }) {
  const [logoLoaded, setLogoLoaded] = useState(false)
  const [shouldShowLoader, setShouldShowLoader] = useState(false)
  const container = useRef(null)

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setShouldShowLoader(true)
    }, 200)

    const dummy = new Image()
    dummy.src = logo

    dummy.onload = () => {
      if (!shouldShowLoader) {
        clearTimeout(loaderTimeout)
      }
      setLogoLoaded(true)
      container.current.style.animationPlayState = "running"
    }
  }, [])

  return (
    <div
      ref={container}
      className="splash-container"
      onAnimationEnd={e => {
        e.persist()
        if (e.animationName === "splashThanos") {
          setComplete(true)
        }
      }}
    >
      {!logoLoaded && shouldShowLoader ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            animation: "colorRotate 3s linear infinite",
          }}
        >
          <Loader
            type="Audio"
            height={100}
            width={100}
            color={"var(--c-neon-blue)"}
          />
        </div>
      ) : (
        <div className="wrapper">
          <div className="top">
            <div className="logo">
              <Logo src={logo} width="100%" />
            </div>
            <div className="info">
              <span>
                {new Date(EVENT_DATE).toLocaleDateString("en", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span>Pymatuning, PA</span>
            </div>
          </div>
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
      )}
    </div>
  )
}
