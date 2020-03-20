import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/dracula"
import classnames from "classnames"

const components = {
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
      <h1 className="text-gray-900 mb-2 mt-6 text-3xl font-semibold">
        {props.children}
      </h1>
    )
  },
  h2: props => {
    return (
      <h2 className="text-gray-900 mb-2 mt-6 text-2xl font-semibold">
        {props.children}
      </h2>
    )
  },
  h3: props => {
    return (
      <h3 className="text-gray-900 mb-2 mt-6 text-xl font-semibold">
        {props.children}
      </h3>
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
  hr: props => {
    return <hr {...props} className={classnames("my-6", props.className)} />
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

    const language =
      matches && matches.groups && matches.groups.lang
        ? matches.groups.lang
        : ""

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
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <div className="code-block mt-6 mb-8">
            <div className="code-block-language">{language.toUpperCase()}</div>
            <pre
              className="rounded overflow-auto py-6 px-6 text-sm"
              style={style}
            >
              {removeEmptyLineAtEnd(tokens).map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          </div>
        )}
      </Highlight>
    )
  }
}

export default function MdxWrapper({ children }) {
  return <MDXProvider components={components}>{children}</MDXProvider>
}
