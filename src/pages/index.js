import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"

import image_joschua from "../images/joschua.jpg"

const Index = ({
  data: {
    allMdx: { nodes: snippets }
  }
}) => (
  <Layout>
    <SEO title="Browse" />
    <div className="flex text-gray-700 mb-6 bg-white py-4 px-6 rounded border border-gray-200">
      <img
        src={image_joschua}
        className="rounded-full w-12 h-12 mr-4 mt-1"
        alt="Profile Picture of Joschua"
      />
      <p className="text-sm text-gray-700">
        <small className="block text-gray-600 text-sm mb-1">
          Joschua Schneider
        </small>
        This blog-style collection helps me to <b>document</b> often used hooks,
        functions and configurations/setups. I use this as a central database to{" "}
        <b>boost my efficiency</b> as a developer and share what I have learned
        with others.
      </p>
    </div>
    <h2 className="text-gray-800 text-xl mb-3">Browse all snippets</h2>
    <div className="flex flex-col">
      {snippets.map(snippet => (
        <Link
          to={snippet.fields.slug}
          className="rounded bg-white shadow py-4 px-6 border-l-4 border-purple-500 hover:border-purple-700 mb-6"
        >
          <small className="block text-xs text-purple-600 mb-1">
            {snippet.frontmatter.date}
          </small>
          <h3 className="text-gray-900 font-semibold leading-tight">
            {snippet.frontmatter.title}
          </h3>
          <p className="flex flex-wrap mb-1 mt-2">
            {snippet.frontmatter.tags.map(tag => (
              <pre
                key={tag}
                className="bg-gray-200 rounded-sm mr-1 mb-2 text-xs px-1"
              >
                {tag}
              </pre>
            ))}
          </p>
          <p className="text-gray-700">
            {snippet.excerpt}{" "}
            <span className="text-purple-600 hover:underline">
              continue reading.
            </span>
          </p>
        </Link>
      ))}
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query IndexPageSnippetsQuery {
    allMdx {
      nodes {
        excerpt(pruneLength: 190)
        frontmatter {
          name
          tags
          date
          title
        }
        fields {
          slug
        }
      }
    }
  }
`

export default Index
