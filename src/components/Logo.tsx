import React, { useEffect } from "react"
// @ts-ignore
import logo from "../images/logo-original.png"
import { Link } from "gatsby"

interface Props {
  width: string
  src: string
  setLoaded?: (finishedLoading: boolean) => void
}

function Logo({ src, width }) {
  return (
    <Link to="/">
      <img
        src={src}
        style={{
          width,
        }}
      />
    </Link>
  )
}
Logo.defaultProps = {
  width: "unset",
}

export default Logo
