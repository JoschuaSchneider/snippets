import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from "../images/logo-small.png"

const Header = ({ siteDescription }) => (
  <div className="mx-auto max-w-3xl py-6 mb-6 px-5 border-b border-gray-200">
    <Link to="/" className="text-gray-800 font-semibold text-2xl flex items-center mb-2">
      <img src={logo} className="h-10 mr-4" alt="Snippets logo"/>
      <span>Snippets</span>
    </Link>
    <p className="text-gray-700">{siteDescription}</p>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ""
}

export default Header
