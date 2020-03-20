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
    <p className="text-gray-700 mb-6">
      This collection helps me to document often used hooks, components and
      functions. I use it to boost my performance as a developer by compiling a
      central database of solutions to problems I encounter or code I tend to
      use often.
    </p>
    <div className="flex flex-col">
      {snippets.map(snippet => (
        <Link
          to={snippet.fields.slug}
          className="rounded bg-white shadow py-4 px-6 border-l-4 border-purple-500 hover:border-purple-700 mb-6"
        >
          <h3 className="text-gray-900 font-semibold">
            {snippet.frontmatter.title}
          </h3>
          <p className="flex mb-3 mt-2">
            {snippet.frontmatter.tags.map(tag => (
              <pre key={tag} className="bg-gray-200 rounded-sm mr-2 text-sm">
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
