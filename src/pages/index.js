import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"

const Index = ({
  data: {
    allMdx: { nodes: snippets }
  }
}) => (
  <Layout>
    <SEO title="Browse" />
    <p className="text-purple-800 mb-6 bg-purple-200 py-3 px-4 rounded">
      This collection helps me to <b>document</b> often used hooks, components
      and configurations/setups. I use this as a central database to boost my
      efficiency as a developer. <br />
      This helps keeping me (and maybe you) from finding solutions to problems
      that have already been solved.
    </p>
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
          <p className="text-gray-700">{snippet.excerpt}</p>
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
