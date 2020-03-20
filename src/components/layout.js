import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children, condensedHeader = false }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <Header
          siteTitle={data.site.siteMetadata.title}
          siteDescription={data.site.siteMetadata.description}
          condensed={condensedHeader}
        />
        <div className="mx-auto max-w-3xl px-5">{children}</div>
        <footer className="mx-auto max-w-3xl px-5 my-8 text-sm flex flex-col items-center">
          <p className="text-gray-700">
            Copyright &copy; {new Date().getFullYear()}{" "}
            <a
              className="bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-sm"
              href="https://twitter.com/joschuadev"
            >
              Joschua Schneider
            </a>
          </p>
          <a
            className="bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-sm"
            href="https://github.com/JoschuaSchneider/snippets.git"
          >
            View source on GitHub.
          </a>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
