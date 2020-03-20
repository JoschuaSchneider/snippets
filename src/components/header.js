import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from "../images/logo-small.png"

const Header = ({ siteDescription, condensed = false }) => (
  <header className="bg-white border-b border-gray-200 mb-6">
    <div className="mx-auto max-w-3xl pt-6 pb-4 px-5">
      <Link
        to="/"
        className="text-gray-800 font-semibold text-2xl flex items-center mb-2"
      >
        <img src={logo} className="h-10 mr-4" alt="Snippets logo" />
        <span>Snippets</span>
      </Link>
      {!condensed && <p className="text-gray-700">{siteDescription}</p>}
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ""
}

export default Header
