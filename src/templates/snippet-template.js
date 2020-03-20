import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MdxWrapper from "../components/mdx-wrapper"

export default ({ data }) => {
  const { body, frontmatter, excerpt } = data.mdx

  return (
    <Layout>
      <SEO title={frontmatter.title} description={excerpt} />
      <Link
        to="/"
        className="block mb-2 text-purple-700 hover:text-purple-800 hover:underline cursor:pointer"
      >
        {"←"} Browse all snippets
      </Link>
      <h2 className="text-3xl text-gray-800 mb-4">{frontmatter.title}</h2>
      <div className="flex mb-6 px-4 py-1 border-l-4 border-purple-200">
        {frontmatter.tags.map(tag => (
          <div key={tag} className="bg-gray-200 rounded-sm mr-3 px-2">
            {tag}
          </div>
        ))}
      </div>
      <MdxWrapper>
        <MDXRenderer>{body}</MDXRenderer>
      </MdxWrapper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query SnippetBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      excerpt(pruneLength: 190)
      frontmatter {
        title
        tags
      }
    }
  }
`
