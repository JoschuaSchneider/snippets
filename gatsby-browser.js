import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/dracula"
import classnames from "classnames"

import "./src/styles/tailwind.css"

const component = {
  inlineCode: props => {
    return (
      <code
        {...props}
        className={classnames(
          "text-gray-900 bg-purple-200 rounded-sm",
          props.className
        )}
      />
    )
  },
  h1: props => {
    return (
      <h1
        {...props}
        className={classnames(
          "text-gray-900 mb-2 mt-6 text-3xl",
          props.className
        )}
      />
    )
  },
  h2: props => {
    return (
      <h2
        {...props}
        className={classnames(
          "text-gray-900 mb-2 mt-6 text-2xl",
          props.className
        )}
      />
    )
  },
  h3: props => {
    return (
      <h3
        {...props}
        className={classnames(
          "text-gray-900 mb-2 mt-6 text-xl",
          props.className
        )}
      />
    )
  },
  p: props => {
    return (
      <p
        {...props}
        className={classnames("text-gray-800 mb-2", props.className)}
      />
    )
  },
  strong: props => {
    return (
      <strong
        {...props}
        className={classnames("text-gray-800 font-semibold", props.className)}
      />
    )
  },
  pre: props => {
    const className = props.children.props.className || ""
    const matches = className.match(/language-(?<lang>.*)/)

    const removeEmptyLineAtEnd = tokens => {
      const lastToken = tokens[tokens.length - 1]
      if (lastToken.length === 1 && lastToken[0].content === "") {
        return tokens.slice(0, -1)
      }

      return tokens
    }

    return (
      <Highlight
        {...defaultProps}
        theme={theme}
        code={props.children.props.children}
        language={
          matches && matches.groups && matches.groups.lang
            ? matches.groups.lang
            : ""
        }
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={classnames(
              className,
              "rounded overflow-auto py-4 px-6 mt-6 mb-6 text-sm"
            )}
            style={{ backgroundColor: style.backgroundColor }}
          >
            {removeEmptyLineAtEnd(tokens).map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    )
  }
}

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={component}>{element}</MDXProvider>
}
